import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardBody } from 'reactstrap';

import { getPost, removePost } from '../../actions';
import CommentsContext from '../../commentsContext';

import Post from './Post';
import PostForm from '../PostForm/PostForm';
import Comments from '../Comments/Comments';

const PostView = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isEdit, setIsEdit] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [dispatch, id]);

    const post = useSelector((state) => state.posts[id]);

    const handleEdit = () => {
        setIsEdit(true);
    };

    const handleDelete = () => {
        dispatch(removePost(id));
        history.push('/');
    };

    if (!post) {
        return <div>Loading...</div>;
    }

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
                <CommentsContext.Provider value={{ postID: id, comments: post.comments }}>
                    <Comments />
                </CommentsContext.Provider>
            </CardBody>
        </Card>
    );
};

export default PostView;
