import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import PostFormPage from './components/PostForm/PostFormPage';
import PostView from './components/PostView/PostView';

const Routes = () => {
    const posts = useSelector((state) => state.posts);

    return (
        <Switch>
            <Route exact path="/">
                <Home posts={posts} />
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
