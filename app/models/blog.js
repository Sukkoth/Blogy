const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BlogSchema = new Schema({
    title: String,
    sub_title: String,
    text: String,
    cover_img: {
        type: String,
        default: "home-bg.jpg"
    },
    created_at: {
        type: Date,
        default: Date.now
    }, 
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;