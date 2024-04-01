// @ts-nocheck
import clientPromise from "$lib/db/db";
import crypto from 'crypto';

export const load = async (event) => {
    const client = await clientPromise;
    const turingerDB = client.db("Turinger");
    const eventsCollection = turingerDB.collection("events");
    const usersCollection = turingerDB.collection("users");
    let eventsArr = await eventsCollection.find({}, { projection: { _id: 0 } }).toArray();
    eventsArr.forEach(element => {
        element.date = element.date.toDateString();
    });

    const session = await event.locals.auth();
    if (session) {
        let userData = await usersCollection.findOne({ email: session.user.email });
        if (!userData.registeredEvents) {
            if (userData.mahe == "non_mahe") {
                if (userData.paymentstatus == "processing") {
                    return { events: [], signedIn: true, paymentProcessing: true, non_mahe: true };
                } else if (userData.paymentstatus == "success") {
                    if (!userData.token) {
                        let uniqueToken = generateUniqueKey(userData._id);
                        await usersCollection.updateOne(
                            { _id: userData._id },
                            { $set: { token: uniqueToken } }
                        );
                        return { events: [], signedIn: true, token: uniqueToken, non_mahe: true };
                    }
                    return { events: [], signedIn: true, token: userData.token, non_mahe: true };
                } else {
                    return { events: [], signedIn: true, non_mahe: true };
                }
            }
            return { events: [], signedIn: true, non_mahe: false };
        } else {
            let userEvents = userData.registeredEvents;
            let registeredEventsArr = [];
            eventsArr.forEach(event => {
                if (userEvents.includes(event.eventName)) {
                    registeredEventsArr.push(event);
                }
            });
            if (userData.mahe == "non_mahe") {
                if (userData.paymentstatus == "processing") {
                    return { events: registeredEventsArr, signedIn: true, paymentProcessing: true, non_mahe: true };
                } else if (userData.paymentstatus == "success") {
                    if (!userData.token) {
                        let uniqueToken = generateUniqueKey(userData._id);
                        await usersCollection.updateOne(
                            { _id: userData._id },
                            { $set: { token: uniqueToken } }
                        );
                        return { events: registeredEventsArr, signedIn: true, token: uniqueToken, non_mahe: true };
                    }
                    return { events: registeredEventsArr, signedIn: true, token: userData.token, non_mahe: true };
                } else {
                    return { events: registeredEventsArr, signedIn: true, non_mahe: true };
                }
            }
            return { events: registeredEventsArr, signedIn: true, non_mahe: false };
        }
    } else {
        return { events: [], signedIn: false, non_mahe: false };
    }
}

function generateUniqueKey(id) {
    const timestamp = Date.now().toString(36); // Convert current time to base 36
    const randomBytes = crypto.randomBytes(3).toString('hex'); // Generate 6 random hex characters
    const idString = id.toString(36).slice(-3); // Convert _id to base 36 and take last 3 characters
    // Concatenate and take the last 6 characters
    const uniqueKey = (timestamp + randomBytes + idString).slice(-6);
    return uniqueKey;
}