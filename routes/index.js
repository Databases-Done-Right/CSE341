const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
const getProfessionalDataController = require('../controllers/professionalData');

routes.get('/', lesson1Controller.helloWorldRoute);
routes.get('/professional', getProfessionalDataController.getData);

module.exports = routes;