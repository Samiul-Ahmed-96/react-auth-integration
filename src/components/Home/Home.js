import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import usefirebase from '../../hooks/useFirebase';
import Header from '../Header/Header';

const Home = () => {
    const {signInUsingGoogle,user} = usefirebase();
    const {email,displayName,photoURL} = user;
    return (
        <div>
           <Container>
            <Header></Header>
            <Button className="my-2" onClick={signInUsingGoogle}>Google Sign In</Button>
            <div>
                <img src={photoURL} alt="" />
                <h1>{displayName}</h1>
                <p>{email}</p>

            </div>
           </Container>
        </div>
    );
};

export default Home;