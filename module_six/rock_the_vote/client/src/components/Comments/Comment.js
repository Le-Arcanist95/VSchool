import React from "react";

export default function Comment ({ comment, username }) {
    return (
        <div className="flex flex-row items-center justify-between border-2 border-gray-300 p-2 rounded-lg my-2 mx-1">
            <div>
                <h3 className="text-lg font-semibold">{username}</h3>
                <p className="text-sm">{comment.comment}</p>
            </div>
            <div>
                <p className="text-sm">{new Date(comment.date).toLocaleString()}</p>
            </div>
        </div>
    );
}