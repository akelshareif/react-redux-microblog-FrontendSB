import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';

import { vote } from '../../actions';

const Votes = ({ votes, postID }) => {
    const dispatch = useDispatch();

    const handleVote = (voteType) => {
        dispatch(vote(voteType, postID));
    };

    return (
        <div>
            <span>{votes} votes</span>
            <Button onClick={() => handleVote('up')} color="success" size="sm" className="mx-2">
                <i className="fas fa-thumbs-up"></i>
            </Button>
            <Button onClick={() => handleVote('down')} color="danger" size="sm">
                <i className="fas fa-thumbs-down"></i>
            </Button>
        </div>
    );
};

export default Votes;
