import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async (req, res, next) => {
    //let url = "mongodb+srv://alexnahuelecheverria:alexnahuelecheverria@nucba-fullstack.a4myohw.mongodb.net/"
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected");
        next()
    }
    catch(error){
        console.log(error);
        //process.exit(1)
        res.status(500).json({ message: "Error connecting to database" })
    }
}

export default connectDB;