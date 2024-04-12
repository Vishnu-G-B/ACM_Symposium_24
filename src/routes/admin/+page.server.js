// @ts-nocheck
import { redirect } from "@sveltejs/kit";
import clientPromise from "$lib/db/db.js";


export const load = async (event) => {

    const session = await event.locals.auth();
    if (session) {
        const client = await clientPromise;
        const turingerDB = client.db("Turinger");
        // const eventsCollection = turingerDB.collection("events");
        const usersCollection = turingerDB.collection("users");
        const userEventsMapping = turingerDB.collection("UserEvents");

        const user = await usersCollection.findOne({ email: session.user?.email });
        if (!user.admin) {
            console.log("someones trynna be clever");
            throw redirect(302, "/");
        }
        const non_mahe_users = await usersCollection.find({ mahe: "non_mahe" }, { projection: { _id: 0 } }).toArray();
        console.log("NON MAHE USERS \n"+ non_mahe_users + "\n");
        const mahe_users = await usersCollection.find({mahe:"mahe"},{projection: {_id:0}}).toArray();
        console.log("MAHE USERS \n"+ mahe_users+ "\n");
        const eventMappings = await userEventsMapping.find({projection: {_id:0}}).toArray();
        console.log("EVENT MAPPINGS: \n"+eventMappings);


    } else {
        throw redirect(302, "/");
    }

} 