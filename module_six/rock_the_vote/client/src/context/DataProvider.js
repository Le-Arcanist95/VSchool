import { createContext, useState, useReducer, useCallback } from "react";
import { issueReducer, initialIssueData } from "../hooks/useIssueReducer";
import { voteReducer, initialVoteData } from "../hooks/useVoteReducer";
import axiosClient from "../hooks/useAxios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [issue, issueDispatch] = useReducer(issueReducer, initialIssueData);
    const [votes, voteDispatch] = useReducer(voteReducer, initialVoteData);
    const [issues, setIssues] = useState([]);
    const [comments, setComments] = useState([]);
    const [search, setSearch] = useState('');
    
    const getIssues = useCallback(async () => {
        await axiosClient.get("/issues")
            .then(res => {
                setIssues(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const getComments = useCallback(async () => {
        await axiosClient.get("/comments")
            .then(res => {
                setComments(res.data);
            })
            .catch(err => console.log(err));
    }, []);

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