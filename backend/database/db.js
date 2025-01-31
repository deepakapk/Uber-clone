import mongoose from "mongoose";

export const connectToDB = ()=>{
    mongoose.connect(process.env.DB_CONNECT, {
        dbName:"Uber Clone"
    }).then(()=>{
        console.log("Connected to MongoDB");
    }).catch(()=>{
        console.log("Error connecting to MongoDB");
    })
}