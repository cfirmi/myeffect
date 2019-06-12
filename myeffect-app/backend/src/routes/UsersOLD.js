const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

  // User
  users.post('/', (req, res) => {
    const today = new Date()
    const userData = {
      name: req.body.name,
      about: req.body.about,
      phone: req.body.phone,
      city: req.body.city,
      password: req.body.password,
      website: req.body.website,
      urlfacebook: req.body.urlfacebook,
      urltwitter: req.body.urltwitter,
      useremail: req.body.useremail,
      urlinstgram: req.body.urlinstagram,
      urllinkedin: req.body.urllinkedin,
      urlyoutube: req.body.urlyoutube,
      created: today
    }
    User.findOne({
      where: {
        useremail: req.body.useremail
      }
    })
    .then(user => {
      if(!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
          .then(user => {
            res.json({status: user.useremail + ' registered'})
          })
          .catch(err => {
            res.send('error: ' + err)
          })
        })
      } else {
        res.json({ error: "User already exsits" })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
  })

  users.get('/', (req, res) => {
    User.findOne({
      where: {
        useremail: req.body.useremail
      }
    })
    .then(user => {
      console.log(user)
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
  })

  module.exports = users
