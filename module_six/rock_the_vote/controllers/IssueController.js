const Issue = require('../models/Issue.js')

// Get All Todos
exports.getAllIssues = (req, res, next) => {
   Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
}

// Add new Issue
exports.addIssue = (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
}

// Get Issue by ID
exports.getIssue = (req, res, next) => {
    Issue.findOne(
        { _id: req.params.issueId },
        (err, foundIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundIssue)
        }
    )
}

// Update Issue
exports.updateIssue = (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
}

// Delete Issue
exports.deleteIssue = (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.auth._id },
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`)
        }
    )
}

// Get Issues by User
exports.getIssuesByUser = (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    });
};