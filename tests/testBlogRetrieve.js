const mongoose = require('mongoose');
const Blog = require('../app/models/blog');

const dbURI = "mongodb+srv://sukkoth:paFnAWcw4Jv9ALzG@myblog.a5ccukp.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on("open", ()=> console.log('Connected to database. . . .'));

Blog.find({}, (error, blogData)=>{
    if(error){
        console.log("Error fetching data");
    }else{
        console.log("BLOG DATA", blogData);
    }
});