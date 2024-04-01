// @ts-nocheck
import clientPromise from "$lib/db/db";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    try {
        const client = await clientPromise;
        const turingerDB = client.db("Turinger");
        const UserEventsCollection = turingerDB.collection("UserEvents");
        const usersCollection = turingerDB.collection("users");
        const { eventName, userEmail } = await request.json();

        // Log the request payload for debugging
        console.log('Request payload:', { eventName, userEmail });

        const existingUser = await usersCollection.findOne({ email: userEmail });
        console.log(existingUser);
        if (!existingUser.mobileNo || !existingUser.mahe || !existingUser.name) {
            return json({
                status: 302,
                body: {message: "redirecting"},
            })
        }

        const existingRegistration = await UserEventsCollection.findOne({ event: eventName, user: userEmail });
        if (existingRegistration) {
            return json({
                status: 400,
                body: { message: "You have already registered for this event" }
            });
        }

        const result = await UserEventsCollection.insertOne({ event: eventName, user: userEmail });
        console.log('Registration result:', result);

        const updateResult = await usersCollection.updateOne(
            { email: userEmail },
            { $addToSet: { registeredEvents: eventName } },
            { upsert: true }
        );
        console.log('Update result:', updateResult);

        return json({
            status: 200,
            body: { message: "Successfully Registered!" }
        });
    } catch (error) {
        console.error('Error in POST /api/events:', error);
        return json({
            status: 500,
            body: { message: 'Internal Server Error' }
        });
    }
}