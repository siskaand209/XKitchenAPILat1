const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    code : {type: String, require: true},
    initial : {type: String, require: true},
    name : {type: String, require: true},
});

module.exports = mongoose.model('Category', categorySchema, 'categories');