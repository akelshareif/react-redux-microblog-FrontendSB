import React from 'react';
import { Row, Col, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Post = ({ post, editPost, deletePost }) => {
    return (
        <>
            <Row className="justify-content-between">
                <Col md="5">
                    <CardTitle tag="h2" className="text-capitalize">
                        {post.title}
                    </CardTitle>
                </Col>
                <Col xs="5" className="text-right">
                    <Button onClick={editPost} color="primary" className="mr-4">
                        <i className="far fa-edit"></i>
                    </Button>
                    <Button onClick={deletePost} color="danger">
                        <i className="far fa-trash-alt"></i>
                    </Button>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <CardSubtitle tag="h6" className="text-muted">
                        {post.description}
                    </CardSubtitle>
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
