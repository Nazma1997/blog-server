const router = require('express').Router();
const {create, get} = require('../controllers/post');

/**
 * create user or register
 * @ method POST
 */

router.post('/', create);
router.get('/', get);






module.exports = router;