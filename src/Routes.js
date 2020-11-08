import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Routes = () => {
    return (
        <>
            <Route exact path="/">
                {/* Home page component */}
            </Route>
            <Route exact path="/new">
                {/* New post page with form */}
            </Route>
            <Route exact path="/:id">
                {/* Page showing a post */}
            </Route>
            <Redirect to="/" />
        </>
    );
};

export default Routes;
