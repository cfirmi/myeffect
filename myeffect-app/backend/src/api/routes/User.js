// const LocalStrategy = require('passport-local').Strategy
const express = require('express')
const user = express.Router()
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const auth = require('../../middleware/auth')


const User = require('../models/User')


user.use(cors())

///
///SIGN UP
///

user.post('/signup', (req,res, next) => {
  const { name, email, password } = req.body
  User.findAll({
    where: {
      email: email
    }
  })
  .then(user => {
    if (user.length >= 1) {
      return res.status(409).json({
        message: "Email exists"
      });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if(err) {
          return res.status(500).json( {
            error: err
          })
        } else {
        const user = new User({
          name: name,
          email: email,
          password:  hash
        })
        user
          .save()
          .then(result => {
            console.log(result)
            jwt.sign(
              { id: user.id,
                token: token
              },
              process.env.APP_SECRET,
              { expiresIn: 3600 },
              ( err, token ) => {
                if(err) throw err
                res.status(201).json({
                  token,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  },
                  message: "User Created",
                })
              }) 
            return user
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({
              error: err
            })
          })
        }
      })
    }
  })

})

///
///Sign In
///

user.get('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/settings'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});


///
///Find User
///

user.get('/:id', (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(user => {
    if( user.length < 1 ) {
      return res.status(404).json({
        message: "Auth failed"
      })
    }
    
  })
})

///
///Delete User
///

user.delete('/:id', (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then( result => {
    result.status(200).json({
      message: "User has been deleted"
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  })
})


module.exports = user