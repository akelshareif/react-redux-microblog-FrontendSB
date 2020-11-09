import { ADD_POST, ADD_COMMENT, DELETE_POST, DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = { posts: {} };

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.post.id]: action.post.data,
                },
            };

        case DELETE_POST:
            const postsCopy = Object.assign({}, state.posts);
            delete postsCopy[action.postID];
            return {
                ...state,
                posts: {
                    ...postsCopy,
                },
            };
        case ADD_COMMENT:
        case DELETE_COMMENT:
        default:
            return state;
    }
};

export default rootReducer;
