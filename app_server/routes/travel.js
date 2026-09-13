var express = require('express');
var router = express.Router();
const ctrlTravel = require('../controllers/travel');

/* GET travel page. */
router.get('/', ctrlTravel.index);

module.exports = router;
