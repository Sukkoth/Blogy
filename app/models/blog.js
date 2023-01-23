const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BlogSchema = new Schema({
    title: String,
    sub_title: String,
    text: String,
    author_id: String,
    cover_img: {
        type: String,
        default: "home-bg.jpg"
    }
}, {
    timestamps: true
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;