const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const contactRoutes = require("./api/routes/contactRoutes")
const userRoutes = require("./api/routes/userRoutes")

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use("/api/contacts", contactRoutes)
app.use("/api/users", userRoutes)


module.exports = app;
