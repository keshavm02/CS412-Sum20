const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../config/openWeatherMapAPI');
const {promisify} = require('util');
const redis = require('redis');
const client = redis.createClient();
client.flushdb((err, success) => {
    if (err) { throw new Error(err)}
});


router.route('/')
    .post(async (req, res, next) => {

        try {

            const existsAsync = promisify(client.exists).bind(client);
            const getAsync = promisify(client.get).bind(client);
            const setAsync = promisify(client.set).bind(client);
            let match = await existsAsync(req.body.city);
            if (match) {
                let cityData = await getAsync(req.body.city);
                let response = {
                    cityData: cityData,
                    cached: true
                }
                res.send(response);
            } else {
                let cityData = await fetch(CONFIG.url + '?q=' + req.body.city + '&units=metric&appid=' + CONFIG.key);
                cityData = await cityData.json();
                setAsync(req.body.city, JSON.stringify(cityData), 'EX', 30);
                let response = {
                    cityData: cityData,
                    cached: false
                }
                res.send(response);
            }

        } catch {
            res.status(400);
            res.render('wrongCity');
        }
    })

module.exports = router;