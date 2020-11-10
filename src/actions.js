import axios from 'axios';
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

const BASE_URL = 'http://localhost:5000/api/posts';

// ********* Thunk action creators ***************

export const getTitles = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${BASE_URL}`);
            dispatch(gotTitles(data));
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

export const getPost = (postID) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${BASE_URL}/${postID}`);
            dispatch(gotPost(data));
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

export const createPost = (post) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${BASE_URL}`, post);
            dispatch(addPost(data));
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

export const updatePost = (post) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`${BASE_URL}/${post.id}`, post);
            dispatch(updatedPost(data));
            dispatch(getTitles());
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

export const removePost = (postID) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${BASE_URL}/${postID}`);
            dispatch(deletePost(postID));
            dispatch(getTitles());
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

export const createComment = (postID, text) => {
    return async (dispatch) => {
        try {
            const { data: comment } = await axios.post(`${BASE_URL}/${postID}/comments`, { text });
            dispatch(addComment(postID, comment));
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

export const removeComment = (commentID, postID) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${BASE_URL}/${postID}/comments/${commentID}`);
            dispatch(deleteComment(commentID, postID));
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

export const vote = (voteType, postID) => {
    return async (dispatch) => {
        try {
            const {
                data: { votes },
            } = await axios.post(`${BASE_URL}/${postID}/vote/${voteType}`);
            dispatch(updateVote(votes, postID));
            dispatch(getTitles());
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

// ********* Basic action creators ***************
const gotTitles = (titles) => {
    return {
        type: GOT_TITLES,
        titles,
    };
};

const gotPost = (post) => {
    return {
        type: GOT_POST,
        post,
    };
};

const addPost = (post) => {
    return {
        type: ADD_POST,
        post,
    };
};

const updatedPost = (post) => {
    return {
        type: UPDATE_POST,
        post,
    };
};

const deletePost = (postID) => {
    return {
        type: DELETE_POST,
        postID,
    };
};

const addComment = (postID, comment) => {
    return {
        type: ADD_COMMENT,
        postID,
        comment,
    };
};

const deleteComment = (commentID, postID) => {
    return {
        type: DELETE_COMMENT,
        commentID,
        postID,
    };
};

const updateVote = (votes, postID) => {
    return {
        type: UPDATE_VOTE,
        votes,
        postID,
    };
};
