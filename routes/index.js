var express = require('express');
var router = express.Router();

var users = require('../controlller/logincotroller');


router.post('/insert', users.register);

router.get('/',users.select);

router.get('/:id',users.delete_data);

router.post('/update/:id',users.updata_data);

module.exports = router;
