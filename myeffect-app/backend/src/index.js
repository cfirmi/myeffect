const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

// Routes
const User = require('./api/routes/user')


const app = express()
const PORT = process.env.PORT || 4444

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/user', User);


app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`)
})