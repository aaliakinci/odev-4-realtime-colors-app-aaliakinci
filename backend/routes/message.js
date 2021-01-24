const router = require('express').Router();

//controller
const messageController = require('../controller/messageController')

router.get('/list',messageController.listMessage)

module.exports=router;