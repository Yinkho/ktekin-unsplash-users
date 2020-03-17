const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    idString: {
        type: String,
        required: true
    },
    updated_at: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
