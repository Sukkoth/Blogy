const router = require('express').Router();
const BlogController = require('../app/controllers/BlogController');

router.get('/', BlogController.index);
router.get('/view/:blogId', BlogController.show);
router.get('/create', BlogController.create);
router.post('/store', BlogController.store);

module.exports = router;
