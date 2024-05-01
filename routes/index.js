const routes = require('express').Router();
const getProfessionalDataController = require('../controllers/professionalData');
const contactsController = require('../controllers/contacts');

routes.get('/professional', getProfessionalDataController.getData);
routes.get('/contacts', contactsController.getAllContacts);
routes.get('/contacts/:id', contactsController.getSingleContact);

module.exports = routes;
