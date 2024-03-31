// @ts-nocheck
import clientPromise from '$lib/db/db.js';

export const actions = {
    default: async ({ request, event }) => {
        const client = await clientPromise;
        const turingerDB = client.db("Turinger");
        const usersCollection = turingerDB.collection("users");

        const { handleSession } = await import('@auth/core');
        const session = await handleSession(event);
        const userEmail = session?.user?.email;

        const data = await request.formData();
        const name = data.get("name");
        const mobileNo = data.get("mobileNo");
        const isMahe = data.get("maheCheck") === "mahe";
        const branch = isMahe ? data.get("branch") : "";

        const existingUser = await usersCollection.findOne({ email: userEmail });

        if (existingUser) {
            // User already exists, update the document
            await usersCollection.updateOne(
                { email: userEmail },
                { $set: { name, mobileNo, isMahe, branch } }
            );
        } else {
            // User doesn't exist, create a new document
            await usersCollection.insertOne({
                email: userEmail,
                name,
                mobileNo,
                isMahe,
                branch,
            });
        }
    }
};