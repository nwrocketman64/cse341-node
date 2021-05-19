//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const session = require('express-session');

router.get('/',(req, res, next) => {
    if (!req.session.style){
        req.session.style = 'blue';
    }
    if (!req.session.counter){
        req.session.counter = 1;
    }
    res.render('pages/ta04', { 
        title: 'Team Activity 04', 
        path: '/ta04', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
        style: req.session.style,
        counter: req.session.counter
    });
});

router.post('/change-style', (req, res, next) => {
    const style = req.body.style;
    req.session.style = style;
    res.redirect('/ta04');
});

router.post('/counter', (req, res, next) => {
    const change = req.body.change;
    if (change == 'up'){
        req.session.counter = req.session.counter + 1;
    } else {
        req.session.counter = req.session.counter - 1;
    }
    res.redirect('/ta04');
});

router.post('/reset', (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/ta04');
    });
});

module.exports = router;