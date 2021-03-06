import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import PostFormPage from './components/PostForm/PostFormPage';
import PostView from './components/Post/PostView';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
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
