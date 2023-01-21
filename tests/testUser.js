const mongoose = require('mongoose');
const dbURI = "mongodb+srv://sukkoth:paFnAWcw4Jv9ALzG@myblog.a5ccukp.mongodb.net/?retryWrites=true&w=majority"
const User = require('../app/models/user');
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on("open", ()=>console.log("Connected to db"));
User.create({
    first_name: "Gadisa",
    last_name: "Teklu",
    email: "Suukootj@gmail.com",
    phone_number: "0906582283",
    password: "password",
    image: "myimage.jpg",
    remember_token: "lkasjdhfshdflkajdhfjkah",
    birth_date: new Date,
    is_active: true,
}, (error, users)=>{
    if(error){
        console.log("Error", error);
    }else{
        console.log("Users Data: ", users);
    }
});
