import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import PostFormPage from './components/PostForm/PostFormPage';
import PostView from './components/PostView/PostView';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                {/* Home page component */}
            </Route>
            <Route exact path="/new">
                <PostFormPage />
            </Route>
            <Route exact path="/:id">
                <PostView />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};

export default Routes;
