const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    //declare variables/properties
    topic: {
        type:String,
        required:true//since must have
    },
    description: {
        type: String,
        required: true,
    },
    postCategory: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("posts", postSchema);