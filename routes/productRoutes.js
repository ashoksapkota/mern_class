//importing
const router = require('express').Router();
const productControllers = require("../controllers/productControllers")
//making routes
router.post('/create', productControllers.createProduct);


//export 
module.exports = router;