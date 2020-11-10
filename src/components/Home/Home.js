import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'reactstrap';

import { getTitles } from '../../actions';

import PostCard from './PostCard';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTitles());
    }, [dispatch]);

    const titles = useSelector((state) => state.titles);

    return (
        <div>
            <p className="font-weight-light Home-text">
                Welcome to <b>Microblog</b>, our innovative site for communicating on the information superhighway.
            </p>
            <Row className="justify-content-between">
                {titles.map(({ id, title, description, votes }) => (
                    <Col key={id} md="6" className="mb-2">
                        <PostCard post={{ id, title, description }} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;
