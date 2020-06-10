const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('This is the ps3 route.');
});

router.get('/getString', function(req, res, next) {
    res.render('getString', { string: 'Hello Prof.Donham/Katherine. Have a nice day!' });
});

router.route('/postString')
    .post((req, res, next) => {
        res.render('postString', { string: req.body.string, length: req.body.string.length});
    })

module.exports = router;