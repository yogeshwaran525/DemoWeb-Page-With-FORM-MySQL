const express = require('express');
const path = require('path');
const hbs = require('hbs');
const mysql = require('mysql');
const cookieParser = require("cookie-parser");
const port = 9966;
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'demoproject'
})

db.connect((error)=>{
    if(!error){
        console.log('Database Connection Done');
    }else{
        console.log('Database Not Connected');
    }
})

app.use(cookieParser());
app.use(express.urlencoded({ extended : false}))


const filesspath =path.join(__dirname,"./public");
app.use(express.static(filesspath));

app.set('view engine','hbs');

const partialspath = path.join(__dirname +"/views/partials");
hbs.registerPartials(partialspath);

app.use('/',require('./webpage/page'))

// Redirect to Folder router file auth.js module . exports
// app.use("/auth",require("./data/form"))  

app.listen(port,()=>{
    console.log('Server is listening Port : ' +`${port}`);
})  