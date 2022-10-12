const express = require('express');
const router = express.Router();

const user = require("../controller/userController");
const result = require("../controller/resultController")
const {auth} = require("../middleWare/auth")

router.post("/register", user.createUser)
router.post("/loginUser", user.loginUser)
router.post("/addData/updateData",auth, result.addDataUpdateData)
router.get("/listOfStudents",auth, result.findStudents)
router.delete("/deleteStudent",auth, result.deleteStudent)

module.exports = router