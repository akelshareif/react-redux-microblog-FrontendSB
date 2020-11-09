import React from 'react';
import { ListGroupItem, Row, Col, Button } from 'reactstrap';

// This displays a single comment with a delete button
const CommentCard = () => {
    return (
        <ListGroupItem>
            <Row>
                <Col>
                    <p>
                        This is a single comment! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                        exercitationem repellendus expedita illo dignissimos, consectetur fugit odit explicabo volupiores
                        amet vitae sint suscipit dolorem eius molestiae est atque voluptatum, ipsa distinctio!
                    </p>
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
