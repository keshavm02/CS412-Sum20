const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('This is the ps3 route.');
});

router.get('/getString', function(req, res, next) {
    res.render('getString', { string: 'Hello Prof.Donham/Katherine. Have a nice day!' });
});

router.route('/postString')
    // .get((req, res, next) => {
    //     res.render('index', {title: 'post String problem'})
    // })
    .post((req, res, next) => {
        res.render('postString', { string: req.body.string, length: req.body.string.length});
        // res.send(`string = ${req.body.string}`);
    })



// router.post('/postString', function(req, res, next) {
//     res.send(`firstName = ${req.body.firstName}`);
//     // res.render('getString', { string: 'Hello Prof.Donham/Katherine. Have a nice day!' });
// });

module.exports = router;