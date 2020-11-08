import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PostFormPage from './components/PostForm/PostFormPage';

const Routes = () => {
    return (
        <>
            <Route exact path="/">
                {/* Home page component */}
            </Route>
            <Route exact path="/new">
                <PostFormPage />
            </Route>
            <Route exact path="/:id">
                {/* Page showing a post */}
            </Route>
            <Redirect to="/" />
        </>
    );
};

export default Routes;
