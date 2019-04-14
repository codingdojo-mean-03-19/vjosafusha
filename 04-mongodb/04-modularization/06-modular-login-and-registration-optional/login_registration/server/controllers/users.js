var bcrypt = require("bcrypt");
var User = require('../models/user')

module.exports = {
    index: function (req, res) {
        //   if (req.session.userid) {
        //     return res.redirect("/secrets");
        //   }
        res.render("index");
    },

    create: function (req, res) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        var user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash,
            birthday: req.body.birthday
        });

        user.save(function (err) {
            if (err) {
                console.log("We have an error!", err);
                for (var key in err.errors) {
                    req.flash("registration", err.errors[key].message);
                }
                res.redirect("/");
            } else {
                req.session.userid = user._id;
                res.redirect("/secrets");
            }
        });
    },

    process: function (req, res) {
        User.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
                return render.json("Fields are empty");
            }

            if (user) {
                console.log("There is a user", user.password);
                var unhash = bcrypt.compareSync(req.body.password, user.password);
                if (unhash) {
                    req.session.userid = user._id;
                    return res.redirect("/secrets");
                }
            }
            res.redirect("/");
        });
    },

    secrets: function (req, res) {
        if (!req.session.userid) {
            res.redirect("/");
        } else {
            res.render("secrets");
        }
    },

    logout: function (req, res) {
        req.session.destroy();
        res.redirect("/");
    }


}