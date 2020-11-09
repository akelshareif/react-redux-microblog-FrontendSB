import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

import './NavHeader.css';

const NavHeader = () => {
    return (
        <div>
            <Jumbotron className="mt-3">
                <h1 className="display-3">Microblog</h1>
                <p className="font-weight-light NavHeader-text">Get in the Rithm of blogging!</p>
                <div className=" mt-2 NavHeader-links">
                    <Link to="/" className="mr-3">
                        Blog
                    </Link>
                    <Link to="/new">Add a new post</Link>
                </div>
            </Jumbotron>
        </div>
    );
};

export default NavHeader;
