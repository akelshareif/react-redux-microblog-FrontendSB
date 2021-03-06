import React from 'react';
import Routes from './Routes';
import NavHeader from './components/NavHeader/NavHeader';
import { Container } from 'reactstrap';

const App = () => {
    return (
        <Container>
            <NavHeader />
            <Routes />
        </Container>
    );
};

export default App;
