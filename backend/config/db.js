import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const connection = mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("connection successful", connection)
    }
    catch (error) {
        console.log(error.message)
        process.exit(1) // 1 - failure, 0 - success
    }
}
