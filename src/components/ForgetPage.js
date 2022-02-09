import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Logo from './Logo';


const ForgetPage = () => {
    return (
        <>
            <style type="text/css">
                {`
                .primary{
                    color: #007ACC;
                }
                .btn-custom {
                background-color: #007ACC;
                color: white;
                }

                .btn-custom:hover {
                    background-color: #05548A;
                    color: white;
                }


                .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                
                `}
            </style>
            <Container>
            <Row>
            
                    <Col xl={4} lg={5} md={6} sm={9}  className="mt-5 mb-5 px-5 m-auto bg-white shadow-sm rounded">
                        <Logo text={"Forget your password"}/>
                        <Form>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email address"/>
                            </Form.Group>

                        
                        <div className="d-grid gap-2 mb-4">
                            <Button variant="custom" type="submit">
                                Reset Password
                            </Button>
                        </div>
                        </Form>

                        <a className="primary text-decoration-none"><p className='text-center mb-5'>Back to Login</p></a>
                        
                    </Col>
                    </Row>
                    </Container>

        </>
    );
};

export default ForgetPage;