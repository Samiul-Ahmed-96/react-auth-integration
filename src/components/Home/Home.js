import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import usefirebase from '../../hooks/useFirebase';
import Header from '../Header/Header';

const Home = () => {
    const {signInUsingGoogle} = usefirebase();
    return (
        <div>
           <Container>
            <Header></Header>
            <Button className="my-2" onClick={signInUsingGoogle}>Google Sign In</Button>
           </Container>
        </div>
    );
};

export default Home;