import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import homeImg from '../../images/home.jpg';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const {signInUsingGoogle,user,handleSignOut} = useAuth();
    const {email,displayName,photoURL} = user;
    return (
        <div className="home">
           <Container>
            <Header></Header>
            <Button className="my-3 rounded-3 bg-primary text-white border-0 p-2" onClick={signInUsingGoogle}>Google Sign In</Button>
            <Row>
                <Col>
                    <img className="w-100 my-lg-5" src={homeImg} alt="" />
                </Col>
                <Col>
                    <div className="my-lg-5">
                    {email &&<h2>User Info</h2>}
                    <img className="rounded-circle" src={photoURL } alt="" />
                    <h1>{displayName}</h1>
                    <p>{email}</p>
                    {email &&<button className="my-3 rounded-3 bg-primary text-white border-0 p-2" onClick={handleSignOut}>Log out</button>}
                    </div>
                </Col>
            </Row>
           </Container>
        </div>
    );
};

export default Home;