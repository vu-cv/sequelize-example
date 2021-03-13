var express = require('express');
var router = express.Router();
const { UserController } = require('../controllers')
/* GET users listing. */
router.post('/', (req, res) => UserController.create(req, res));
router.get('/', (req, res) => UserController.find(req, res));
router.get('/:id', (req, res) => UserController.findById(req, res));
router.put('/:id', (req, res) => UserController.update(req, res));
router.delete('/:id', (req, res) => UserController.destroy(req, res));


module.exports = router;
