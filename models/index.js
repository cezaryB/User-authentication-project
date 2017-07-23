const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {type: String},
    lastUpdate: {type: Date, default: Date.now}
});

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    todos: [TodoSchema]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
