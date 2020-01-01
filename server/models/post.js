var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postData = new Schema({
    name: String,
    content: String,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", postData, "posts");