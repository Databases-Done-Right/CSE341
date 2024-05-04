const routes = require('express').Router();
const contactsController = require('../controllers/contacts.js');

routes.get('/', contactsController.getAllContacts);
routes.get('/:id', contactsController.getSingleContact);

routes.post('/', contactsController.addNewContact);
routes.put('/:id', contactsController.updateContact);
routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;