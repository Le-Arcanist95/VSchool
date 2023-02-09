// Import pre-built and custom hooks
import { createContext, useState, useReducer, useCallback, useEffect } from "react";
import { issueReducer, initialIssueData } from "../hooks/useIssueReducer";
import { voteReducer, initialVoteData } from "../hooks/useVoteReducer";
import axiosClient from "../hooks/useAxios";

// Create context
const DataContext = createContext();

// Create provider for context
export const DataProvider = ({ children }) => {
    // State
    const [issue, issueDispatch] = useReducer(issueReducer, initialIssueData);
    const [votes, voteDispatch] = useReducer(voteReducer, initialVoteData);
    const [issues, setIssues] = useState([]);
    const [comments, setComments] = useState([]);
    const [search, setSearch] = useState('');
    
    // Get all issues from database
    const getIssues = useCallback(async () => {
        await axiosClient.get("/issues")
            .then(res => {
                setIssues(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Get all comments from database
    const getComments = useCallback(async () => {
        await axiosClient.get("/comments")
            .then(res => {
                setComments(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Populate issues and comments on page load
    // useEffect(() => {
    //     getIssues();
    //     getComments();
    // }, [getIssues, getComments]);

    return (
        <DataContext.Provider value={{
                issue, 
                issueDispatch, 
                votes, 
                voteDispatch, 
                issues, 
                setIssues, 
                comments, 
                setComments, 
                search, 
                setSearch,
                getIssues,
                getComments
            }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;