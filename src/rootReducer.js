import {
    GOT_TITLES,
    GOT_POST,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    UPDATE_VOTE,
} from './actionTypes';

const INITIAL_STATE = { posts: {}, titles: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GOT_TITLES:
            return {
                ...state,
                titles: action.titles,
            };

        case GOT_POST:
            const { id, ...postData } = action.post;
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [id]: { ...postData },
                },
            };

        case ADD_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.post.id]: {
                        title: action.post.title,
                        description: action.post.description,
                        body: action.post.body,
                        votes: action.post.votes,
                        comments: [],
                    },
                },
            };

        case UPDATE_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.post.id]: {
                        title: action.post.title,
                        description: action.post.description,
                        body: action.post.body,
                        votes: action.post.votes,
                        comments: action.post.comments || [],
                    },
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
            post.comments = [...post.comments, { id: action.comment.id, text: action.comment.text }];
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postID]: {
                        title: post.title,
                        description: post.description,
                        body: post.body,
                        votes: post.votes,
                        comments: post.comments,
                    },
                },
            };

        case DELETE_COMMENT:
            const commentedPost = { ...state.posts[action.postID] };
            commentedPost.comments = commentedPost.comments.filter((c) => c.id !== action.commentID);
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postID]: {
                        title: commentedPost.title,
                        description: commentedPost.description,
                        body: commentedPost.body,
                        votes: commentedPost.votes,
                        comments: commentedPost.comments,
                    },
                },
            };

        case UPDATE_VOTE:
            const votedPost = { ...state.posts[action.postID] };
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postID]: {
                        ...votedPost,
                        votes: action.votes,
                    },
                },
            };

        default:
            return state;
    }
};

export default rootReducer;
