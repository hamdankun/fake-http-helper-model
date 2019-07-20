const express = require('express');
const bodyParser = require('body-parser');
const faketHttppController = require('./../controllers/faketHttppController');

const router = express();


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/preview/:path', faketHttppController.preview)
router.get('/create', faketHttppController.create)
router.post('/store', faketHttppController.store)

module.exports = router