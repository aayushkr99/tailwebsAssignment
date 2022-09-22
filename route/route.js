const express = require('express');
const router = express.Router();

const user = require("../controller/userController");

router.post("/register", user.createUser)
router.post("/loginUser", user.loginUser)
router.get("/getUserDetail", user.findUser)
router.delete("/deleteUsers", user.deleteUsers)

module.exports = router