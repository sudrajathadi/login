import React from 'react';
import {Alert, Col, Container, Row} from "react-bootstrap";
import Img from '../img/okadoc-pro-logo.png';
import Checklist from '../img/Checklist.png';
import FormComponent from './FormComponent';



const Relogin = () => {
    
    return (
        <>
        
            <style type="text/css">
                {`
                .alert-secondary{
                    background-color: #D6EBE8;
                    color: #363D46;
                    border:none;
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
                        <img  className="mt-5 d-block mx-auto img-fluid w-50 mb-4" src={Img}></img>

                            <Alert variant="secondary">
                                <Row>
                                    <Col className="d-flex align-content-center flex-wrap" xs={2}>
                                    <img className="mx-auto d-block justify-content-center w-75" src={Checklist}></img>
                                    
                                    </Col>    
                                    <Col xs={10} className="d-flex align-items-center">
                                    <p className="mb-0 small">Your password has been changed succesfully. Please log in to continue.</p>
                                    </Col>
                                </Row>                
                            </Alert>
                            <h4 className="text-center mb-4">Login to your account</h4>
                            <FormComponent/>
                    </Col>
                    </Row>
             </Container>



        </>
    );
};

export default Relogin;