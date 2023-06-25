const express = require('express');
const { updateUser, getUser, deleteUser } = require('../controller/userController');
const router = express.Router();

router.get('/user/:userId', getUser);
router.post('/user/:userId', updateUser);
router.delete('/admin/user/:userId', deleteUser);

module.exports = router;