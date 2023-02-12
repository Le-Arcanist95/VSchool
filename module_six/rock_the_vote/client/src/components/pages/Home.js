import React, { useContext } from 'react';
import AuthContext from '../../context/AuthProvider.js';
import DataContext from '../../context/DataProvider.js';

export default function Home() {
    const { accessToken } = useContext(AuthContext);
    const { issues, comments } = useContext(DataContext);

    // Render JSX with ternary for displaying issues and comments from database if user is logged in. If not, display a message to describe the app.
    return (
        <>
            {accessToken ? (
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-3xl font-bold">Issues</h1>
                    <div className="flex flex-col items-center justify-center h-screen">
                        {issues.map((issue) => (
                            <div key={issue._id} className="flex flex-col items-center justify-center h-screen">
                                <h2 className="text-2xl font-bold">{issue.title}</h2>
                                <p className="text-xl">{issue.description}</p>
                                <h3 className="text-xl font-bold">Comments</h3>
                                {comments.map((comment) => (
                                    <div key={comment._id} className="flex flex-col items-center justify-center h-screen">
                                        <p className="text-lg">{comment.comment}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center h-screen">
                    <h1 className="text-3xl font-bold my-5">Welcome to the homepage!</h1>
                    <p className="text-xl m-3">This is a forum page where you and many others can come together to discuss a variety of political issues. Once you have created an account, this page will be populated with a list of posts others have created and they will be sorted by popularity. You'll be able to comment, upvote, downvote, and even create your own posts as well. Come join the discussion!</p>
                    <p className="text-xl">Please login or register to view issues and comments.</p>
                </div>
            )}
        </>
    );
}