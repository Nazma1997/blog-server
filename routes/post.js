const router = require('express').Router();
const {create, get, singleItem} = require('../controllers/post');

/**
 * create user or register
 * @ method POST
 */

router.post('/', create);
router.get('/', get);
router.get('/:id', singleItem);






module.exports = router;