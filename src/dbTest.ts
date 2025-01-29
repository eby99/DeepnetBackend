import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const dbURI = process.env.DATABASE_URL as string;


const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    
    console.log("✅ MongoDB Connection Successful!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

connectDB();
