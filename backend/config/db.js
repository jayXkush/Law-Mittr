const mongoose = require("mongoose");

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/authDB"; // Fallback to localhost

mongoose.connect(uri)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
