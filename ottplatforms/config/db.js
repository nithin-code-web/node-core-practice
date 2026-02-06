const mongoose = require('mongoose');

const connectDB = async () => {

    console.log("connecting to MongoDB...");

    try {
        await mongoose.connect('mongodb://localhost:27017/ottplatforms')
        console.log("connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectDB;
