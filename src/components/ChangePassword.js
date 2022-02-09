import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Logo from './Logo';



const ChangePassword = () => {
    
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
                
                }
                `}
            </style>
            <Container fluid>
                <Row>
                    <Col xl={4} lg={5} md={6} sm={9}  className="mt-5 mb-5 px-5 m-auto bg-white shadow-sm rounded">
                        <Logo text={"Change your password"}/>
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>

                        </Form>
                        
                        <div className="d-grid gap-2 mb-4">
                            <Button variant="custom" type="submit">
                                Change Password
                            </Button>
                        </div>   

                        <p className='primary text-center mb-5'>Back to login</p>
                    </Col>
                    </Row>
             </Container>



        </>
    );
};

export default ChangePassword;