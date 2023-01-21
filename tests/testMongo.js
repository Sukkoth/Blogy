const mongoose = require('mongoose');
const Blog = require('../app/models/blog');

const dbURI = "mongodb+srv://sukkoth:paFnAWcw4Jv9ALzG@myblog.a5ccukp.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(dbURI, {useNewUrlParser: true});
Blog.create({
    title: "The Meg",
    sub_title: "White sharks rage like never before",
    text: "When your application starts up, Mongoose automatically calls createIndex for each defined index in your schema. Mongoose will call createIndex for each index sequentially, and emit an 'index' event on the model when all the createIndex calls succeeded or when there was an error. While nice for development, it is recommended this behavior be disabled in production since index creation can cause a significant performance impact. Disable the behavior by setting the autoIndex option of your schema to false, or globally on the connection by setting the option autoIndex to false."
}, (error, blog)=>{
    if(error){
        console.log("Error", error);
    }else{
        console.log("Blog", blog);
    }
});

