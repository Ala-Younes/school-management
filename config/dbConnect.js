const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    await mongoose.connect(mongoUrl); 
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Connection Failed", error.message);
  }
};

dbConnect();
