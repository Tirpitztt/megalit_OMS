const {Router} = require('express')
const controller = require('../../Controllers/supportController')
const awsController = require('../../Controllers/aws.controller')
const body_parser = require('body-parser')
const router = Router()

let urlencodedParser = body_parser.urlencoded({extended:false})

router.get('/getMaterial',urlencodedParser,controller.getMaterial);
router.get('/getMaterials',urlencodedParser,controller.getMaterials);
router.post('/addMaterials',urlencodedParser,controller.addMaterials);
router.post('/updateMaterials',urlencodedParser,controller.updateMaterials);
router.get('/contures',urlencodedParser,awsController.getContures);
router.post('/contures',urlencodedParser,awsController.getConturesFolder);

module.exports = router;