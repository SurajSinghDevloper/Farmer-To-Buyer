const express = require('express');
const router = express.Router();
const { signup, signin, signout } = require('../../controller/admin/auth');
const { validateSignupRequest, isRequestValidated, validateSignInRequest } = require('../../validators/auth');
const { requireSignin } = require('../../middleware');



router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSignInRequest, isRequestValidated, signin);
router.post('/admin/signout', requireSignin, signout);


module.exports = router;