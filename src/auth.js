// @ts-nocheck
import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "$lib/db/db";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET } from "$env/static/private";

export const { handle, signIn, signOut } = SvelteKitAuth(async () => {
    const authOptions = {
        providers: [
            Google({
                clientId: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET
            })
        ],
        adapter: MongoDBAdapter(clientPromise),
        secret: AUTH_SECRET,
        trustHost: true
    }
    return authOptions
}) 