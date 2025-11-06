var express = require('express');
var router = express.Router();
const userModel = require('./users');
const passport = require('passport');
const localStrategy = require('passport-local');
const upload = require ('./multer');

// Configure Passport Local Strategy
passport.use(new localStrategy(userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

router.get('/', function(req, res, next) {
  res.render('index', {nav: false});
});

router.get('/register', function(req, res, next) {
  res.render('register', {nav: false});
});

router.get('/profile', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({username: req.user.username});
  res.render('profile', {currentUser: user, nav: true});
});

router.post('/fileupload', isLoggedIn, upload.single("image"), async function(req, res, next) {
  const user = await userModel.findOne({username: req.user.username});
  user.profileImage = req.file.filename;
  await user.save();
  res.redirect('/profile');
});

router.post('/register', function(req, res, next) {
  const data = new userModel({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact
  })
  
  userModel.register(data, req.body.password)
    .then(function(user) {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/profile');
      });
    })
    .catch(function(err) {
      console.log(err);
      res.redirect('/register');
    });
});

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/profile',
}),
function(req, res, next) {
});

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}



module.exports = router;
