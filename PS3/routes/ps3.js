const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('This is the ps3 route.');
});

router.get('/getString', function(req, res, next) {
    res.render('getString', { string: 'Hello Prof.Donham/Katherine. Have a nice day!' });
});

module.exports = router;