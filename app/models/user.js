const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone_number: String,
    password: String,
    image: String,
    remember_token: String,
    birth_date: Date,
    is_active: Boolean,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;