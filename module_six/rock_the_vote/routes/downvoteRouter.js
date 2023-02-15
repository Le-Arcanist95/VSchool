const express = require("express");
const downvoteRouter = express.Router();
const { downvoteIssue } = require("../controllers/VoteController.js");

downvoteRouter.route("/:issueId")
    .put(downvoteIssue)

module.exports = downvoteRouter;