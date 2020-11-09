import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const PostCard = ({ post }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h4">
                    <Link to={`/${post.id}`} className="text-decoration-none text-capitalize">
                        {post.title}
                    </Link>
                </CardTitle>
                <CardText className="font-italic lead">{post.description}</CardText>
            </CardBody>
        </Card>
    );
};

export default PostCard;
