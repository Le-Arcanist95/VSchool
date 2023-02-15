const Comment = require('../models/Comment.js');

// Get All Comments
exports.getAllComments = (req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
}

// Add new Comment
exports.addComment = (req, res, next) => {
    req.body.user = req.auth._id
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            console.log(err)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
}

// Get Comment by ID
exports.getComment = (req, res, next) => {
    Comment.findOne(
        { _id: req.params.commentId },
        (err, foundComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundComment)
        }
    )
}

// Update Comment
exports.updateComment = (req, res, next) => {
    Comment.findOneAndUpdate(
        { _id: req.params.commentId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }
    )
}

// Delete Comment
exports.deleteComment = (req, res, next) => {
    Comment.findOneAndDelete(
        { _id: req.params.commentId, user: req.auth._id },
        (err, deletedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted comment from the database!`)
        }
    )
}

// Get Comments by Issue ID
exports.getCommentsByIssueId = (req, res, next) => {
    Comment.find(
        { issue: req.params.issueId },
        (err, comments) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comments)
        }
    )
}

// Get Comments by User ID
exports.getCommentsByUserId = (req, res, next) => {
    Comment.find(
        { user: req.params.userId },
        (err, comments) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comments)
        }
    )
}