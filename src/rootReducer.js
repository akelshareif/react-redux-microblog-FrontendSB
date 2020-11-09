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
            const postsCopy = { ...state.posts };
            delete postsCopy[action.postID];
            return {
                ...state,
                posts: {
                    ...postsCopy,
                },
            };

        case ADD_COMMENT:
            const post = { ...state.posts[action.postID] };
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
            const commentedPost = { ...state.posts[action.postID] };
            commentedPost.comments = commentedPost.comments.filter((c) => c.id !== action.id);
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postID]: {
                        title: commentedPost.title,
                        description: commentedPost.description,
                        body: commentedPost.body,
                        comments: commentedPost.comments,
                    },
                },
            };

        default:
            return state;
    }
};

export default rootReducer;
