const express = require('express')
const user = express.Router()
const cors = require('cors')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

const User = require('../models/User')


user.use(cors())

///
///SIGN UP
///

user.post('/signup', (req,res, next) => {
  User.findAll({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if (user.length >= 1) {
      return res.status(409).json({
        message: "Email exists"
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
          return res.status(500).json( {
            error: err
          })
        } else {
        const user = new User({
          email: req.body.email,
          password:  hash
        })
        user
          .save()
          .then(result => {
            console.log(result)
            res.status(201).json({
              message: "User Created",
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
///Find User
///

user.get('/:id', (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    console.log(result)
    res.status(201).json({
      message: "User Found"
    })
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