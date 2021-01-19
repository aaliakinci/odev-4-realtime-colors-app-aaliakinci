const router = require('express').Router();

//controller
const userController = require('../controller/userController');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

module.exports=router;