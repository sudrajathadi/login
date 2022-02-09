import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FormComponent from './FormComponent';
import Img from '../img/okadoc-pro-logo.png';


const LoginPage = () => {
    
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
                        <img  className="mt-5 d-block mx-auto img-fluid w-50 mb-5" src={Img}></img>
                        <h4 className="text-center mb-4">Login to your account</h4>

                        <FormComponent/>

                        <p className='primary text-center mb-5'>Forgot password?</p>
                        
                    </Col>
                    </Row>
             </Container>



        </>
    );
};

export default LoginPage;