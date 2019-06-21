const express = require('express')
const user = express.Router()
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')


user.use(cors())

///
///SIGN UP
///

user.post('/', (req,res, next) => {
  const { email, password } = req.body
  User.findAll({
    where: {
      email: email,
      password: password
    }
  })
  .then( user => {
    if(!user) return res.status(400).json({ message: ' User is not here '})

    //Validate Password

    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if(!isMatch) return res.status(400).json( { message: "Invalid Creds"})
      
      jwt.sign(
        { id: user.id },
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
    })
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