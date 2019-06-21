const jwt = require('jsonwebtoken')


function auth(req, res,next) {
  const token = req.header('x-auth-token')
//Check token
  if(!token) {
    res.status(401).json( { message: "No token here" })
  }
//Verify token

  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET)
    req.user = decoded
    next()
  } catch(e) {
    res.status(400).json( { message: "Token is not valid" } )
  }

}

module.exports = auth