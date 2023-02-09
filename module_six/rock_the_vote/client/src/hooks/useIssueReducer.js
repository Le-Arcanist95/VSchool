const initialIssueData = {
    issue: {
        title: '',
        description: '',
        status: '',
        type: '',
        votes: 0,
    }
};

const issueReducer = (state, action) => {
    switch (action.type) {
        case 'changeValue':
            return { ...state, [action.name]: action.value };
        case 'up':
            return { votes: state.votes + 1 };
        case 'down':
            return { votes: state.votes - 1 };
        case 'reset':
            return initialIssueData;
        default:
            throw new Error();
    };
}

export { initialIssueData, issueReducer };