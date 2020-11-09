import React from 'react';
import { Row, Col } from 'reactstrap';

import PostCard from './PostCard';
import './Home.css';

const Home = ({ posts }) => {
    return (
        <div>
            <p className="font-weight-light Home-text">
                Welcome to <b>Microblog</b>, our innovative site for communicating on the information superhighway.
            </p>
            <Row className="justify-content-between">
                {Object.entries(posts).map(([id, { title, description }]) => {
                    return (
                        <Col key={id} md="6" className="mb-2">
                            <PostCard post={{ id, title, description }} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default Home;
