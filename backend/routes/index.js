var express = require('express');
var router = express.Router();
const credentials = require('../config/config');

router.get('/', function(req, res) {
    res.status(200).send(`Server Tarea4 - Up and Running on VM ${credentials.vm.name}`);
});

module.exports = router;