const initialVoteData = {
    votes: 0
};

const voteReducer = (state, action) => {
    switch (action.type) {
        case 'up':
        return { votes: state.votes + 1 };
        case 'down':
        return { votes: state.votes - 1 };
        default:
            throw new Error();
    };
};

export { initialVoteData, voteReducer};