const express = require("express");
const courseController = require("../app/controllers/courseController");
const router = express.Router();

router.get("/:slug", courseController.courseDetail);

module.exports = router;
