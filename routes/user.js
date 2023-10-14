const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/users", userController.checkUser, userController.getUser);
router.get("/create-cookies", userController.createCookie);
router.post("/upload-file", userController.uploadFile);

module.exports = router;
