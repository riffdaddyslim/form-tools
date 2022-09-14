const express = require("express")
const APP = express()

APP.use("/", express.static("./public"))

APP.listen("8000")
console.log(`App launched at http://localhost:8000`)