const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../config/openWeatherMapAPI');

router.route('/')
    .get(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?q=boston&units=metric&appid=' + CONFIG.key);
        let weather = await result.json();
        res.render('weather', {title: 'Today in Weather!', city: weather.name, temperature: weather.main.temp});
    })
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?q=' + req.body.city + '&units=metric&appid=' + CONFIG.key);
        try {
            let weather = await result.json();
            res.render('weather', {title: 'Today in Weather!', city: weather.name, temperature: weather.main.temp});
        } catch {
            res.status(400);
            res.render('wrongCity');
        }
    })

module.exports = router;