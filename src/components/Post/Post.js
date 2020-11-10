import React from 'react';
import { Row, Col, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

import Votes from '../Votes/Votes';

const Post = ({ post, editPost, deletePost }) => {
    return (
        <>
            <Row className="justify-content-between">
                <Col>
                    <CardTitle tag="h2" className="text-capitalize">
                        {post.title}
                    </CardTitle>
                </Col>
                <Col className="text-right">
                    <Button onClick={editPost} color="primary" className="mr-4">
                        <i className="far fa-edit"></i>
                    </Button>
                    <Button onClick={deletePost} color="danger">
                        <i className="far fa-trash-alt"></i>
                    </Button>
                </Col>
            </Row>

            <Row className="mt-2 align-items-center">
                <Col>
                    <CardSubtitle tag="h6" className="text-muted">
                        {post.description}
                    </CardSubtitle>
                </Col>
                <Col className="text-right">
                    <Votes votes={post.votes} postID={post.id} />
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <CardText>{post.body}</CardText>
                </Col>
            </Row>
        </>
    );
};

export default Post;
