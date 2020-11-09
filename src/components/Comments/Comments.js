import React from 'react';
import CommentList from '../Comments/CommentList';
import CommentForm from '../Comments/CommentForm';

const Comments = () => {
    return (
        <>
            <h4 className="font-weight-light mb-3">Comments</h4>
            <CommentList />
            <CommentForm />
        </>
    );
};

export default Comments;
