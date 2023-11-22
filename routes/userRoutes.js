//import
const router = require('express').Router();
const userController = require("../controllers/userControllers");

//all the routes for the users
router.get('/create', userController.createUser);

//export
module.exports = router;