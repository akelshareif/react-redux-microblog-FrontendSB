import axios from 'axios';
import { GOT_TITLES, GOT_POST, ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

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

// update needs work
export const updatePost = (post) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`${BASE_URL}/${post.id}`, post);
            dispatch(updatedPost(data));
        } catch (e) {
            console.error('API ERROR: ', e);
        }
    };
};

export const savePost = (post) => {};

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

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post,
    };
};

export const updatedPost = (post) => {
    return {
        type: UPDATE_POST,
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

export const deleteComment = ({ id, postID }) => {
    return {
        type: DELETE_COMMENT,
        id,
        postID,
    };
};
