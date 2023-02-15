const express = require("express");
const upvoteRouter = express.Router();
const { upvoteIssue } = require("../controllers/VoteController.js");

upvoteRouter.route("/:issueId")
    .put(upvoteIssue)

module.exports = upvoteRouter;