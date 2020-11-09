import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardBody } from 'reactstrap';

import { deletePost } from '../../actions';
import CommentsContext from '../../commentsContext';

import Post from './Post';
import PostForm from '../PostForm/PostForm';
import Comments from '../Comments/Comments';

const PostView = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isEdit, setIsEdit] = useState(false);

    const { id } = useParams();

    const post = useSelector((state) => state.posts[id]);

    const handleEdit = () => {
        setIsEdit(true);
    };

    const handleDelete = () => {
        dispatch(deletePost(id));
        history.push('/');
    };

    return (
        <Card className="mb-4">
            <CardBody>
                {isEdit ? (
                    <PostForm post={{ id, ...post }} />
                ) : (
                    <Post post={post} editPost={handleEdit} deletePost={handleDelete} />
                )}
            </CardBody>

            <hr className="my-2 mx-2" />

            <CardBody>
                {/* <CommentsContext.Provider
                    value={'comments' in post ? { postID: id, comments: post.comments } : { postID: id }}
                > */}
                <CommentsContext.Provider value={{ postID: id, comments: post.comments }}>
                    <Comments />
                </CommentsContext.Provider>
            </CardBody>
        </Card>
    );
};

export default PostView;
