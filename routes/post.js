const router = require('express').Router();
const {create} = require('../controllers/post');

/**
 * create user or register
 * @ method POST
 */

router.post('/', create);






module.exports = router;