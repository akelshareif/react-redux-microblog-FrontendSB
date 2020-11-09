import React from 'react';
import { ListGroupItem, Row, Col, Button } from 'reactstrap';

const CommentCard = ({ comment }) => {
    return (
        <ListGroupItem>
            <Row>
                <Col>
                    <p>{comment}</p>
                </Col>
                <Col xs="2" className="text-right">
                    <Button color="danger" size="sm">
                        <i className="far fa-trash-alt"></i>
                    </Button>
                </Col>
            </Row>
        </ListGroupItem>
    );
};

export default CommentCard;
