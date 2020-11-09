import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { v4 as uuid } from 'uuid';

import { addPost } from '../../actions';
import './PostForm.css';

const PostForm = ({ post }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const INITIAL_STATE = post
        ? {
              title: post.title,
              description: post.description,
              body: post.body,
          }
        : {
              title: '',
              description: '',
              body: '',
          };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (post) {
            // updates post
            dispatch(addPost({ id: post.id, data: { ...formData, comments: post.comments } }));
        } else {
            // creates new post
            dispatch(addPost({ id: uuid(), data: { ...formData, comments: [] } }));
        }
        history.push('/');
    };

    return (
        <Form onSubmit={handleSubmit} className="PostForm mb-3">
            <FormGroup>
                <Label htmlFor="title">Title:</Label>
                <Input
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Enter post title here"
                    bsSize="lg"
                    onChange={handleChange}
                    value={formData.title}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="description">Description:</Label>
                <Input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter post description here"
                    bsSize="lg"
                    onChange={handleChange}
                    value={formData.description}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="body">Body:</Label>
                <Input
                    type="textarea"
                    name="body"
                    id="body"
                    required
                    placeholder="Enter post body here"
                    bsSize="lg"
                    rows="8"
                    onChange={handleChange}
                    value={formData.body}
                />
            </FormGroup>
            <div className="text-right">
                <Button type="submit" size="lg" color="primary" className="mr-3">
                    Save
                </Button>
                <Button type="button" tag={Link} to="/" size="lg">
                    Cancel
                </Button>
            </div>
        </Form>
    );
};

export default PostForm;
