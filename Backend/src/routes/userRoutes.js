const express = require('express');
const { updateUser, getUser, deleteUser } = require('../controller/userController');
const router = express.Router();

router.get('/admin/user/:userId', getUser);
router.post('/admin/user/:userId', updateUser);
router.delete('/admin/user/:userId', deleteUser);

module.exports = router;