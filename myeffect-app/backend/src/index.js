const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('config')

require('dotenv').config({ path: 'variables.env' })

// Routes
const User = require('./api/routes/user')
const Auth = require('./api/routes/auth')


const app = express()
const PORT = process.env.PORT || 4444

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/user', User);
app.use('/auth', Auth);


app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`)
})