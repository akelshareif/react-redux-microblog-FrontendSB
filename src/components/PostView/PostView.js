import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const PostView = () => {
    const { id } = useParams();

    const handleEdit = () => {};

    const handleDelete = () => {};

    return (
        <Card>
            <CardBody>
                <Row className="justify-content-between">
                    <Col md="5">
                        <CardTitle tag="h2">Card Title</CardTitle>
                    </Col>
                    <Col xs="5" className="text-right">
                        <Button onClick={handleEdit} color="primary" className="mr-4">
                            <i className="far fa-edit"></i>
                        </Button>
                        <Button onClick={handleDelete} color="danger">
                            <i className="far fa-trash-alt"></i>
                        </Button>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col>
                        <CardSubtitle tag="h6" className="text-muted">
                            This is a desxcription
                        </CardSubtitle>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col>
                        <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam cupiditate delectus harum
                            quibusdam distinctio nostrum inventore, earum quam in labore placeat minus iusto totam cum
                            laboriosam ipsa excepturi voluptate.
                        </CardText>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default PostView;
