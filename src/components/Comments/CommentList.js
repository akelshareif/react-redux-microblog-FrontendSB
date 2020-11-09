import React, { useContext } from 'react';
import { ListGroup } from 'reactstrap';

import CommentsContext from '../../commentsContext';
import CommentCard from './CommentCard';

// This displays all the comments
const Comments = () => {
    const data = useContext(CommentsContext);

    return data.comments.length > 0 ? (
        <>
            <ListGroup>
                {data.comments.map(({ id, comment }) => (
                    <CommentCard key={id} id={id} postID={data.postID} comment={comment} />
                ))}
            </ListGroup>
        </>
    ) : (
        <div className="font-italic text-center text-muted">No comments yet...</div>
    );
};

export default Comments;
