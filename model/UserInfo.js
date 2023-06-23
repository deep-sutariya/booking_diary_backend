const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserInfo = new Schema({
    uemail: { type: String, required: true},
    uname: { type: String, required: true },
    uphone: { type: String, required: true },
    upass: { type: String, required: true },
    deals: { type: Array, required: true },
}, { timestamps: true });

module.exports = mongoose.model('UserSchema', UserInfo);