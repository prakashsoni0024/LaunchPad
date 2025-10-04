import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://prakashsoni0024_db_user:shivam12@launchpad.y9pswcb.mongodb.net/?retryWrites=true&w=majority&appName=LaunchPad", {
      useNewUrlParser: true,
    });

    console.log("MongoDB connected successfully");
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDb;
