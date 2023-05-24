const router = require('express').Router();
const {create, login} = require('../controllers/user');

/**
 * create user or register
 * @ method POST
 */

router.post('/', create);

/**
 * login
 */

router.post('/login', login);




module.exports = router;