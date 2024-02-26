const express = require("express")
const { registerUser, loginUser, allUsers } = require("../controllers/userController")
const router  = express.Router()



router.post("/register", registerUser)
// router.post("/login", loginUser)
// router.get("/all", allUsers)

module.exports = router


