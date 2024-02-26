const http = require("http")
const app = require("./app")
const { prototype } = require("events")

const port = process.env.PORT || 5500
const server  = http.createServer(app)

server.listen(port)