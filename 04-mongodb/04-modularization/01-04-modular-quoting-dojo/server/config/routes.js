var mongoose = require("mongoose");
var User = mongoose.model('User');

module.exports = function (app) {
    app.post('/quotes', function (req, res) {
        console.log('POST DATA', req.body);
        var user = new User({ name: req.body.name, quote: req.body.quote });
        user.save(function (err) {
            if (err) {
                console.log('We have an error!', err);
                for (var key in err.errors) {
                    JSON.stringify(req.flash('submitting', err.errors[key].message));
                }
                res.redirect('/');
            } else {
                console.log('successfully submitted');
                res.redirect('/quotes');
            }
        });
    });

    app.get('/quotes', function (req, res) {
        User.find({}, function (err, users) {
            if (err) {
                console.log(err);
            } else {
                res.render('quotes', { msg: 'Users and Quotes', users });
            }
        }).sort({ createdAt: 'desc' });
    });
}
