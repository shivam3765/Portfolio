const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required:true
    },
    userEmail: {
        type: String,
        required: true
    },
    userMessage: {
        type: String,
        required:true
    }
})


const User = new mongoose.model("User", userSchema);

module.exports = User;