const router = require('express').Router();
const {create, login, get} = require('../controllers/user');

/**
 * create user or register
 * @ method POST
 */

router.post('/', create);
/**
 * get all 
 */

router.get('/', get);

/**
 * login
 */

router.post('/login', login);




module.exports = router;