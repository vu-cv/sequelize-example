var express = require('express');
var router = express.Router();
const { RoleController } = require('../controllers')
/* GET users listing. */
router.post('/', (req, res) => RoleController.create(req, res));
router.get('/', (req, res) => RoleController.find(req, res));
router.get('/:id', (req, res) => RoleController.findById(req, res));
router.put('/:id', (req, res) => RoleController.update(req, res));
router.delete('/:id', (req, res) => RoleController.destroy(req, res));


module.exports = router;
