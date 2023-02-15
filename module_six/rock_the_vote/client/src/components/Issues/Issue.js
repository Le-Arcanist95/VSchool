import React, { useContext } from "react";
import Comment from "../Comments/Comment.js";
import CommentForm from "../Comments/CommentForm.js";
import DataContext from "../../context/DataProvider.js";

export default function Issue({issue}) {
    const { comments, updateIssue, upvoteIssue, downvoteIssue } = useContext(DataContext);
    const issueComments = comments.filter(comment => comment.issue === issue._id);


    const handleUpdate = (action) => {
        if (action === "upvote") {
            upvoteIssue(issue._id);
        } else if (action === "downvote") {
            downvoteIssue({
                ...issue,
                votes: issue.votes - 1
            });
        } else if (action === "resolve") {
            updateIssue({
                ...issue,
                status: "Resolved"
            });
        }
    }

    return (
        <div key={issue._id} className="grid grid-cols-6 auto-rows-min gap-1 border-2 border-gray-300 w-full h-min">
            <h4 className="mx-3 text-xl font-bold col-span-3 row-span-1">{issue.title}</h4>
            <p className="mx-3 text-lg underline underline-offset-4 col-span-3 row-span-1 justify-self-end" onClick={() => handleUpdate("resolve")}>{issue.resolved ? "Resolved" : "Ongoing"}</p>
            <p className="p-2 text-lg col-span-4 row-span-2 border-2 border-gray-300">{issue.description}</p>
            <p className="text-lg col-span-2 row-span-1 justify-self-center">Votes: {issue.votes}</p>
            <button className="mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded col-span-1 row-span-1" onClick={() => handleUpdate("upvote")}>Upvote</button>
            <button className="mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded col-span-1 row-span-1" onClick={() => handleUpdate("downvote")}>Downvote</button>
            <h5 className="mt-5 mx-3 underline text-lg font-bold col-span-6 justify-self-center">Comments</h5>
            <div className="col-span-6 row-span-1">
                {issueComments.map(comment => {
                    return <Comment key={comment._id} comment={comment} />
                })}
            </div>
            <CommentForm issueId={issue._id} />
        </div>
            

    );
}