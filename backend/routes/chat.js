const express = require("express");
const router = express.Router();

const { dflkdlflkfld } = require("../controllers/widget");

router.route("/knowledgebase/:baseid/dflkdlflkfld").get(dflkdlflkfld);

module.exports = router;
