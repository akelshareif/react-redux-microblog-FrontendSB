import React from 'react';
import { useDispatch } from 'react-redux';
import { ListGroupItem, Row, Col, Button } from 'reactstrap';

import { removeComment } from '../../actions';

const CommentCard = ({ id, postID, comment }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeComment(id, postID));
    };

    return (
        <ListGroupItem>
            <Row>
                <Col>
                    <p>{comment}</p>
                </Col>
                <Col xs="2" className="text-right">
                    <Button color="danger" size="sm" onClick={handleDelete}>
                        <i className="far fa-trash-alt"></i>
                    </Button>
                </Col>
            </Row>
        </ListGroupItem>
    );
};

export default CommentCard;
