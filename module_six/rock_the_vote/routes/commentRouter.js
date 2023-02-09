const express = require("express");
const commentRouter = express.Router();
const { getAllComments, addComment, getComment, updateComment, deleteComment, getCommentsByIssueId, getCommentsByUserId } = require("../controllers/CommentController.js");

commentRouter.route("/")
    .get(getAllComments)
    .post(addComment);

commentRouter.route("/:commentId")
    .get(getComment)
    .put(updateComment)
    .delete(deleteComment);

commentRouter.route('/user')
    .get(getCommentsByUserId);

commentRouter.route('/issue')
    .get(getCommentsByIssueId);

module.exports = commentRouter;