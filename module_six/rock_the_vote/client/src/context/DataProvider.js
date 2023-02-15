// Import pre-built and custom hooks
import { createContext, useState, useReducer, useCallback, useEffect } from "react";
import { issueReducer, initialIssueData } from "../hooks/useIssueReducer";
import { axiosClientPrivate } from "../hooks/useAxios";

// Create context
const DataContext = createContext();

// Create provider for context
export const DataProvider = ({ children }) => {
    // State
    const [issue, issueDispatch] = useReducer(issueReducer, initialIssueData);
    const [issues, setIssues] = useState([]);
    const [comments, setComments] = useState([]);
    
    // Get all issues from database
    const getIssues = useCallback(async () => {
        await axiosClientPrivate.get("/issue")
            .then(res => {
                setIssues(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Add new issue to database
    const addIssue = useCallback(async (issue) => {
        await axiosClientPrivate.post("/issue", issue)
            .then(res => {
                issueDispatch({type: "ADD_ISSUE", payload: res.data});
                getIssues();
                console.log(issue)
            })
            .catch(err => console.log(err));
    }, [getIssues]);

    // Update issue in database
    const updateIssue = useCallback(async (issue) => {
        await axiosClientPrivate.put(`/issue/${issue._id}`, issue)
            .then(res => {
                issueDispatch({type: "UPDATE_ISSUE", payload: res.data});
                getIssues();
            })
            .catch(err => console.log(err));
    }, [getIssues]);

    // Delete issue from database
    const deleteIssue = useCallback(async (id) => {
        await axiosClientPrivate.delete(`/issue/${id}`)
            .then(res => {
                issueDispatch({type: "DELETE_ISSUE", payload: res.data});
                getIssues();
            })
            .catch(err => console.log(err));
    }, [getIssues]);

    // Get all comments from database
    const getComments = useCallback(async () => {
        await axiosClientPrivate.get("/comment")
            .then(res => {
                setComments(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Add new comment to database
    const addComment = useCallback(async (comment, issueId) => {
        await axiosClientPrivate.post("/comment", comment, {params: {issueId}})
            .then(res => {
                setComments(prevComments => [...prevComments, res.data]);
            })
            .catch(err => console.log(err));
    }, []);

    // Upvote Issue
    const upvoteIssue = useCallback(async (id) => {
        await axiosClientPrivate.put(`/issue/upvote/${id}`)
            .then(res => {
                issueDispatch({type: "UPVOTE_ISSUE", payload: res.data});
                getIssues();
            })
            .catch(err => console.log(err));
    }, [getIssues]);

    // Downvote Issue
    const downvoteIssue = useCallback(async (id) => {
        await axiosClientPrivate.put(`/issue/downvote/${id}`)
            .then(res => {
                issueDispatch({type: "DOWNVOTE_ISSUE", payload: res.data});
                getIssues();
            })
            .catch(err => console.log(err));
    }, [getIssues]);

    // Populate issues and comments on page load
    useEffect(() => {
        if(localStorage.getItem("accessToken")) {
            getIssues();
            getComments();
        }   
    }, [getIssues, getComments]);

    return (
        <DataContext.Provider value={{
                issue, 
                issueDispatch,
                issues, 
                setIssues, 
                comments, 
                setComments,
                getIssues,
                getComments,
                addIssue,
                updateIssue,
                deleteIssue,
                addComment,
                upvoteIssue,
                downvoteIssue
            }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;