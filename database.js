import { MongoClient, ServerApiVersion, ObjectId, Collection } from "mongodb";

const password = "l7frAUojOffeTBER";
const userName = "user_m00886801";
const server = "cluster0.3gffmem.mongodb.net";


const encodedusername = encodeURIComponent(userName);
const encodedpassword = encodeURIComponent(password);

const connectionURI = `mongodb+srv://${encodedusername}:${encodedpassword}@${server}/?retryWrites=true&w=majority&appName=Cluster0`
console.log(connectionURI)

const client = new MongoClient(connectionURI, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true
    }
})

export async function databaseConnection(){
        await client.connect();
        console.log("Successfully Connected to DataBase")
    return client.db("cst2120_GameVerse")
};

const database = client.db("cst2120_GameVerse");
const collection = database.collection("users");


async function find(){
    const query = {};

    const results = await collection.find(query).toArray();
    console.log(results);

    await client.close();
}

async function insert(){
    const newUser = {username: "Mike Daniels", email: "mikedan@gmail.com", age: 20, password: "password", online_status: "Online", followers: ["Ben Smith"], follower_count: 1, discord_tag: "gamer1", profile_picture: "profile1.png"};

    const result = await collection.insertOne(newUser);
    console.log(result);

    await client.close();
}



// insert();

// find();