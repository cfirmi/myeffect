const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 4444

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

//User Routes
const Users = require('./routes/Users')
app.use('/users', Users)


app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`)
})