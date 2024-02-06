const express = require('express');
const router = express.Router();
const userCtrl = require("../controller/userController")

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', userCtrl.postLogin);

router.get('/logout',userCtrl.getLogout);

module.exports = router;
