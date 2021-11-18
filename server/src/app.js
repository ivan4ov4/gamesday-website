const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var corsOptions = {
    origin: "http://localhost:8080"
};

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions))

require('./routes')(app)


app.listen(process.env.PORT || 8081)