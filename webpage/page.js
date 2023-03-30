const express = require('express');
const router = express.Router();
const Controller = require("../data/form");

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/about',(req,res)=>{
    res.render('about')
})

router.get('/services',(req,res)=>{
    res.render('services')
})

router.get('/blog',(req,res)=>{
    res.render('blog')
})

router.get('/contact',(req,res)=>{
    res.render('contact')
})

router.post('/save',Controller.add);

module.exports = router;