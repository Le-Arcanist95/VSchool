const initialIssueData = [
    {
        title: '',
        description: '',
        status: '',
        votes: 0,
    }
];

const issueReducer = (state, action) => {
    switch (action.type) {
        case "GET_ISSUES":
            return action.payload;
        case 'ADD_ISSUE':
            return [...state, action.payload];
        case 'UPDATE_ISSUE':
            return {
                ...state,
                [action.payload._id]: action.payload
            };
        case 'DELETE_ISSUE':
            return state.filter(issue => issue._id !== action.payload._id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export { initialIssueData, issueReducer };