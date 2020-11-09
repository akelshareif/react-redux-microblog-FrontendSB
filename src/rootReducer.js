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
            const post = Object.assign({}, state.posts[action.postID]);
            post.comments = [...post.comments, { id: action.id, comment: action.comment }];
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postID]: {
                        title: post.title,
                        description: post.description,
                        body: post.body,
                        comments: post.comments,
                    },
                },
            };
        case DELETE_COMMENT:
        default:
            return state;
    }
};

export default rootReducer;
