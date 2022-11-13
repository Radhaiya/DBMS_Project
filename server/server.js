const express = require('express')
require('dotenv').config()
const app = express();
const cors = require('cors')
const authroutes = require('./routes')
require('./Database/connection')
require('./model/userSchema')

const num = "56";

app.use(express.json())
app.use(cors())


app.use('/',authroutes)
app.get('/', (req, res) => {
     res.send("Hi")
})



const host = process.env.HOST
app.listen(host, () => {
    console.log(`Server Running on ${host}`);
})

