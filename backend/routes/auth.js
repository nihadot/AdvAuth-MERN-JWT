const express = require("express");
const router = express.Router();

// Controllers
const {
  login,
  register,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const { dflkdlflkfld } = require("../controllers/widget");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);
router.route("/knowledgebase/:baseid/dflkdlflkfld").get( dflkdlflkfld);

module.exports = router;
