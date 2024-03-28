// @ts-nocheck
import clientPromise from "$lib/db/db";

export const load = async (event) => {
    const client = await clientPromise;
    const turingerDB = client.db("Turinger");
    const eventsCollection = turingerDB.collection("events");
    const usersCollection = turingerDB.collection("users");
    let eventsArr = await eventsCollection.find({}, { projection: { _id: 0 } }).toArray();
    eventsArr.forEach(element => {
        element.date = element.date.toDateString();
    });

    // console.log("logging the events array", eventsArr);
    const session = await event.locals.auth();
    if (session) {
        let userData = await usersCollection.findOne({ email: session.user.email }, { projection: { _id: 0 } });
        if (!userData.registeredEvents) {
            return { events: [], signedIn: true };
        } else {
            // console.log("logging the users registered events: ",userData.registeredEvents);
            let userEvents = userData.registeredEvents;
            let registeredEventsArr = [];
            eventsArr.forEach(event => {
                if (userEvents.includes(event.eventName)) {
                    registeredEventsArr.push(event);
                }
            })
            // eventsArr.forEach((eventArray) => {
            //     let newArray= [];
            //     eventArray.forEach((event) => {
            //         if(userEvents.includes(event.eve))
            //     })
            // })
            return { events: registeredEventsArr, signedIn: true };
        }
    } else {
        return { events: [], signedIn: false };
    }

}