var express = require('express');
var router = express.Router();
const UserController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', UserController.index);

router.get('/ver/:id', UserController.findById)
router.get('/search', UserController.search)

router.get('/cadastro', UserController.cadastro)
router.post('/cadastro', UserController.store)

router.get('/editar/:id', UserController.edit)
router.put('/editar/:id', UserController.update)



module.exports = router;
