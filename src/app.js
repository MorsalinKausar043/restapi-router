
const express = require('express');
require("./db/db");
const MensList = require("./models/conn");
const app = express();
const port = process.env.PORT || 8000;
const router = require('./router')

app.use(express.json());
app.use(router)

// app listen setup
app.listen(port , () => console.log(`express server is ${port}`))