const express = require('express');
const router = express.Router();
const Blog = require('../../app/models/blog');

router.get('/', async (req, res)=>{
    
    try{
        var blogs = await Blog.find().sort([['created_at', 'desc']]);
        res.render('blog/index', {title: "Home", blogs});
    }catch(err){
        res.render('blog/index', {message: "Error fetching data", title: "Home"});
    }
    
});

router.get('/view/:blogId', async (req, res)=>{
    try{
        var blog = await Blog.findById({_id:req.params.blogId});
        res.render('blog/view', {title: "Blog", blog});
    }catch(err){
        res.render('blog/view', {message: "No file", title: "Blog"});
    }
});

router.get('/create', (req, res)=>{
    res.render('blog/create', {title: "Create blog"});
});


router.post('/store', async (req, res) => {
    try {
        const blog = await Blog.create({
            title: req.body.title,
            sub_title: req.body.sub_title,
            text: req.body.text
        });
        res.redirect('/posts');

    } catch (err) {
        res.render('blog/create', {message: "Failed to create your blog", title: "Create Blog"});
    }
});

module.exports = router;