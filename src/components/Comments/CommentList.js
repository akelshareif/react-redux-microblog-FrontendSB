import React from 'react';
import { ListGroup } from 'reactstrap';

import CommentCard from './CommentCard';

// This displays all the comments

const Comments = () => {
    return (
        <>
            <h4 className="font-weight-light">Comments</h4>
            <ListGroup>
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </ListGroup>
        </>
    );
};

export default Comments;
