
// import mongoose from "mongoose";

// const connectDb = async () => {
//         try {
//             const conn = await mongoose.connect("mongodb://localhost:27017/chai", {
//                 useNewUrlParser: true,
//             });
//             console.log(`MongoDB Connected: ${conn.connection.host}`);
//             return conn;
            
//         } catch (error) {
//             console.error(error.message);
//             process.exit(1);
//         }
//     }

//   export default connectDb;

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log("⚠️ No MONGO_URI found in environment, skipping DB connection.");
      return null; // agar env nahi hai toh login continue karega bina DB ke
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    return null; // process.exit(1) mat karo, warna deploy crash karega
  }
};

export default connectDb;
