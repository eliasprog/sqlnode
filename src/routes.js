//imports
const express           = require('express')
const UserController    = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController    = require('./controllers/TechController')

const routes = express.Router()

//users routes
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
//address routes
routes.get('/users/:user_id/addresses', AddressController.index)
routes.post('/users/:user_id/addresses', AddressController.store)
//tech routes
routes.get('/users/:user_id/techs', TechController.index)
routes.post('/users/:user_id/techs', TechController.store)
routes.delete('/users/:user_id/techs', TechController.delete)

//export
module.exports = routes
