import mongoose from "mongoose";

// Create a function to connect with the mongoDB Server
export const connectDB = async() =>{
try {
  const connectionInstances = await mongoose.connect(process.env.MONGODB_URI);
  console.log(`MongoDB connected Succesfully !! , DB Host : ${connectionInstances.connection.host}`)
} catch (error) {
  console.error("MongoDB Connection failed !!", error)
}
}