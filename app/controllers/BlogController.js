const Blog = require('../models/blog');

class BlogController {

    static async index(req, res) {
        try {
            var blogs = await Blog.find().sort([['created_at', 'desc']]);
            res.render('blog/index', { title: "Home", blogs });
        } catch (err) {
            res.render('blog/index', { message: "Error fetching data", title: "Home" });
        }
    }

    static async show(req, res) {
        try {
            var blog = await Blog.findById({ _id: req.params.blogId });
            res.render('blog/view', { title: "Blog", blog });
        } catch (err) {
            res.render('blog/view', { message: "No file", title: "Blog" });
        }
    }

    static create(req, res) {
        res.render('blog/create', { title: "Create blog" });
    }

    static async store(req, res) {
        try {
            const blog = await Blog.create({
                title: req.body.title,
                sub_title: req.body.sub_title,
                text: req.body.text
            });
            res.redirect('/posts');

        } catch (err) {
            res.render('blog/create', { message: "Failed to create your blog", title: "Create Blog" });
        }
    }
}


module.exports = BlogController;