const express = require('express');
const router = express.Router();

const user = require("../controller/userController");

router.post("/register", user.createUser)
router.get("/getUserDetail", user.findUser)

module.exports = router