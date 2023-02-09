const express = require("express");
const issueRouter = express.Router();
const { getAllIssues, addIssue, getIssue, updateIssue, deleteIssue, getIssuesByUser } = require("../controllers/IssueController.js");

issueRouter.route("/")
  .get(getAllIssues)
  .post(addIssue);

issueRouter.route("/:issueId")
  .get(getIssue)
  .put(updateIssue)
  .delete(deleteIssue);

issueRouter.route('/user')
  .get(getIssuesByUser)

module.exports = issueRouter;