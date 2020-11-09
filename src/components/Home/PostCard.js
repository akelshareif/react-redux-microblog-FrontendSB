import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const PostCard = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h4">
                    <Link to="/" className="text-decoration-none">
                        Card title
                    </Link>
                </CardTitle>
                <CardText className="font-italic lead">This is the desxcription of the card.</CardText>
            </CardBody>
        </Card>
    );
};

export default PostCard;
