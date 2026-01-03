import mongoose from "mongoose";

mongoose.connection.on("connected", () => {
  console.log("Database Connected via event");
});

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    process.exit(1);
  }
};
