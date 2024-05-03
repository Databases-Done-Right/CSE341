const routes = require('express').Router();
const contactsController = require('../controllers/contacts.js');

routes.get('/', contactsController.getAllContacts);
routes.get('/:id', contactsController.getSingleContact);

//routes.post('/', contactsController.addContacts);

module.exports = routes;