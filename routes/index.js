const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
const getProfessionalDataController = require('../controllers/professionalData');
const contactsController = require('../controllers/contacts');

routes.get('/', lesson1Controller.helloWorldRoute);
routes.get('/professional', getProfessionalDataController.getData);
routes.get('/contacts', contactsController.getAllContacts);
routes.get('/contacts/:id', contactsController.getSingleContact);

module.exports = routes;