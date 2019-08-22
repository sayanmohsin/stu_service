var express = require('express');
var router = express.Router();

var studentsController = require('../../controllers/students.controller');

/**
 * ping
 */
 router.get('/ping', function (req, res) {
    res.send('pong');
})

/**
 * students
 */
router.get('/students/profiles', studentsController.findAll);

router.get('/students/profiles/:id', studentsController.findById);

router.post('/students/profiles', studentsController.create);

router.put('/students/profiles/:id', studentsController.update);

module.exports = router;
