// @ts-nocheck
import { MongoClient } from "mongodb";
import { MONGO_URI, NODE_ENV } from "$env/static/private";

if(!MONGO_URI){
    throw new Error('Invalid/Missing environment variable: "MONGODB_CONNECTION_STRING"');
}
const uri = MONGO_URI;
const options = {};
let client;
let clientPromise;

if(NODE_ENV === "development"){
    if(!global._mongoClientPromise) {
        client = new MongoClient(uri,options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri,options);
    clientPromise = client.connect();
}

export default clientPromise;