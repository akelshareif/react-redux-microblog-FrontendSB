import React, { useState } from 'react';
import { Form, Input, Button } from 'reactstrap';

const CommentForm = () => {
    const [comment, setComment] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setComment((text) => (text += value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(comment);
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
            />
            <div className=" mt-2 text-right">
                <Button type="submit" color="primary">
                    Add
                </Button>
            </div>
        </Form>
    );
};

export default CommentForm;
