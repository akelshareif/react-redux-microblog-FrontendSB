import { ADD_POST, ADD_COMMENT, DELETE_POST, DELETE_COMMENT } from './actionTypes';

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post,
    };
};

export const deletePost = (postID) => {
    return {
        type: DELETE_POST,
        postID,
    };
};

export const addComment = ({ id, postID, comment }) => {
    return {
        type: ADD_COMMENT,
        id,
        postID,
        comment,
    };
};

export const deleteComment = (commentID) => {
    return {
        type: DELETE_COMMENT,
        commentID,
    };
};
