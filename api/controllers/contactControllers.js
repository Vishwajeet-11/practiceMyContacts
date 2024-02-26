const Contact = require("../models/contactModel");

// @fetch all contacts
// @access public
// @GET /api/contacts
const getContacts = (req, res, next) => {
  Contact.findAll()
    .then(([result]) => {
      res.status(200).json({
        message: "all contacts",
        result: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

// @create  contact
// @access public
// @POST /api/contacts
const createContact = (req, res, next) => {
  const { name, email, phone } = req.body;
  const newContact = new Contact(name, email, phone);
  newContact
    .save()
    .then(() => {
      res.status(201).json({
        message: "contact created",
        contact: {
          name: name,
          email: email,
          phone: phone,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

// @fetch single contact by id
// @access public
// @GET /api/contacts/:id
const getContact = (req, res, next) => {
  const id = req.params.id;
  Contact.findById(id)
    .then(([result]) => {
      res.status(200).json({
        message: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

// @delete contact by id
// @access public
// @DELETE /api/contacts/:id
const deleteContact = (req, res, next) => {
  const id = req.params.id;
  Contact.deleteById(id)
    .then(([result]) => {
      res.status(200).json({
        message: "contact deleted",
        contact: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};


// @udpate contact by id 
// @access public
// @UPDATE /api/contacts/:id
const updateContact = (req, res, next) => {
  const id = req.params.id;
  const { name, email, phone } = req.body;

  const updatedContact = {
    name: name,
    email: email,
    phone: phone,
  };
  Contact.updateById(id, updatedContact)
    .then(() => {
      res.status(200).json({ message: "Contact updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: "Error updating contact" });
    });
};


module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
