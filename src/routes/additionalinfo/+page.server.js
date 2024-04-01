// @ts-nocheck
import clientPromise from '$lib/db/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async (event) => {
        const client = await clientPromise;
        const turingerDB = client.db("Turinger");
        const usersCollection = turingerDB.collection("users");

        const session = await event.locals.auth()
        const userEmail = session?.user?.email;

        if (!session?.user) {
            return {
                error: true,
                message: "You must be logged in to register!!",
            }
        } else {
            const mobileRegEx = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);
            const data = await event.request.formData();
            const name = data.get("name");
            const mobileNo = data.get("mobileNo");
            const isMahe = data.get("maheCheck") === "mahe";
            const branch = isMahe ? data.get("branch") : "";
            const mahe = data.get("maheCheck");

            if (!mobileRegEx.test(mobileNo)) {
                return {
                    error: true,
                    message: "Please Enter a valid mobile number!!",
                }
            }

            if (isMahe) {
                if (!branch) {
                    return {
                        error: true,
                        message: "Please enter your branch",
                    }
                }
            }

            if (!name) {
                return {
                    error: true,
                    message: "Please enter your name",
                }
            }

            const existingUser = await usersCollection.findOne({ email: userEmail });
            if (existingUser) {
                // User already exists, update the document
                await usersCollection.updateOne(
                    { email: userEmail },
                    { $set: { name, mobileNo, mahe, branch } }
                );
                throw redirect(303,"/events");
            } else {
                console.log("i dunno wtf happened here, and i hope to never find out");
            }
        }
    }
};