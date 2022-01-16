const {Router} = require('express')
const controller = require('../../Controllers/order.controller')
const delController = require('../../Controllers/deleteController')
const editController = require('../../Controllers/editController')
const body_parser = require('body-parser')
const router = Router()

let urlencodedParser = body_parser.urlencoded({extended:false})

router.post('/newOrder',urlencodedParser,controller.createNewOrder);
router.get('/delOrder/:num',urlencodedParser,delController.deleteOrder);
router.post('/editOrder',urlencodedParser,editController.editOrder);
router.get('/get_order/:number',urlencodedParser,controller.getOrderOfNum);

module.exports = router;