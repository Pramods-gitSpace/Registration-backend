var express=require('express');
var router=express.Router();
var studentController=require('../src/studentController.js');

router.route('/login').post(studentController.loginFn);
router.route('/register').post(studentController.registerFn);

module.exports = router;