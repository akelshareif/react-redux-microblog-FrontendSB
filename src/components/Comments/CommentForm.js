import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Form, Input, Button } from 'reactstrap';

import CommentsContext from '../../commentsContext';
import { createComment } from '../../actions';

const CommentForm = () => {
    const [comment, setComment] = useState('');

    const { postID } = useContext(CommentsContext);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value } = e.target;
        setComment(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createComment(postID, comment));
        setComment('');
    };

    return (
        <Form onSubmit={handleSubmit} className="mt-4">
            <Input
                type="text"
                name="comment"
                id="comment"
                required
                bsSize="lg"
                placeholder="Enter new comment here"
                onChange={handleChange}
                value={comment}
            />
            <div className=" mt-2 text-right">
                <Button type="submit" color="primary">
                    Add Comment
                </Button>
            </div>
        </Form>
    );
};

export default CommentForm;
