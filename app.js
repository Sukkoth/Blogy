const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});

mongoose.connection.on("error", ()=>{
    console.log("Error connecting to the database");
});

mongoose.connection.on("open", ()=>{
    console.log("Connected to the database");
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/assets'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/posts', require('./resources/routes/blog'));

app.get('/about', (req, res)=>{
    res.render('about', {title: "About"});
})


app.get('/contact', (req, res)=>{
    res.render('contact', {title: "Contact"});
})

app.listen(process.env.APP_PORT, () => console.log(`Server started on port ${process.env.APP_PORT}`));