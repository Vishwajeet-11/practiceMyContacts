const express = require("express")
const router = express.Router()
const{getContact, getContacts, createContact, deleteContact, updateContact} = require("../controllers/contactControllers")

router.get("/", getContacts)
router.post("/", createContact)
router.get("/:id", getContact)
router.put("/:id", updateContact)
router.delete("/:id", deleteContact)

module.exports = router