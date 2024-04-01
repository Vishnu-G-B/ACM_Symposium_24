// @ts-nocheck
import { redirect } from "@sveltejs/kit";
import clientPromise from "$lib/db/db.js";


export const load = async (event) => {

    const session = await event.locals.auth();
    if (session) {
        const client = await clientPromise;
        const turingerDB = client.db("Turinger");
        const eventsCollection = turingerDB.collection("events");
        const usersCollection = turingerDB.collection("users");

        const user = await usersCollection.findOne({ email: session.user?.email });
        if (!user.admin) {
            console.log("someones trynna be clever");
            throw redirect(302, "/");
        } else {
            const non_mahe_users = await usersCollection.find({ mahe: "non_mahe" }, { projection: { _id: 0 } }).toArray();
            
        }

    } else {
        throw redirect(302, "/");
    }

} 