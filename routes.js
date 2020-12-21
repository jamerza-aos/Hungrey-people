const express = require('express')
const router = express.Router()

// const nav = require('./nav')

// console.log(nav);

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/team', (req, res) => {
    res.render('team')
})
router.get('/about', (req, res) => {
    res.render('about')
})
router.get('/booking', (req, res) => {
    res.render('booking')
})
router.get('/gallery', (req, res) => {
    res.render('gallery')
})
router.get('/menu', (req, res) => {
    res.render('menu')
})

router.get('/events', (req, res) => {
    res.render('events')
})
router.get('/contact', (req, res) => {
    res.render('contact')
})


module.exports = router