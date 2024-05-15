import mongoose from "mongoose";

type ConnectionObject ={
    isConnected?:number
}

const connection : ConnectionObject = {}

async function dbconnect():Promise<void>{
    //if database connection is there connect with that
    if(connection.isConnected){
        console.log("Already connected to Database");
        return;
    }

    try{
       const db = await mongoose.connect(process.env.MONGODB_URL || '',{})

       connection.isConnected = db.connections[0].readyState

       console.log("DB connected Successfully");
    }catch(error){
        console.log("db connection failed",error)
        process.exit(1);
    }
}

export default dbconnect;