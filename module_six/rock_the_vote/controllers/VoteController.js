const Issue = require("../models/Issue.js");

// Upvote Issue -- If the user has already upvoted, remove the upvote. If they have already downvoted, remove the downvote and add an upvote. If they have not voted, add an upvote.
exports.upvoteIssue = (req, res, next) => {
    Issue.findOne({ _id: req.params.issueId }, (err, foundIssue) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        if (foundIssue) {
            if (foundIssue.upvotes.includes(req.auth._id)) {
                foundIssue.upvotes = foundIssue.upvotes.filter(
                    (upvote) => upvote !== req.auth._id
                );
            } else if (foundIssue.downvotes.includes(req.auth._id)) {
                foundIssue.downvotes = foundIssue.downvotes.filter(
                    (downvote) => downvote !== req.auth._id
                );
                foundIssue.upvotes.push(req.auth._id);
            } else {
                foundIssue.upvotes.push(req.auth._id);
            }
            foundIssue.save((err, savedIssue) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                return res.status(201).send(savedIssue);
            });
        }
    });
}

// Downvote Issue -- If the user has already downvoted, remove the downvote. If they have already upvoted, remove the upvote and add a downvote. If they have not voted, add a downvote.
exports.downvoteIssue = (req, res, next) => {
    Issue.findOne({ _id: req.params.issueId }, (err, foundIssue) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        if (foundIssue) {
            if (foundIssue.downvotes.includes(req.auth._id)) {
                foundIssue.downvotes = foundIssue.downvotes.filter(
                    (downvote) => downvote !== req.auth._id
                );
            } else if (foundIssue.upvotes.includes(req.auth._id)) {
                foundIssue.upvotes = foundIssue.upvotes.filter(
                    (upvote) => upvote !== req.auth._id
                );
                foundIssue.downvotes.push(req.auth._id);
            } else {
                foundIssue.downvotes.push(req.auth._id);
            }
            foundIssue.save((err, savedIssue) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                return res.status(201).send(savedIssue);
            });
        }
    });
}