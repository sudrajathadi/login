import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FormComponent from './FormComponent';
import Logo from './Logo';


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
                        
                        <Logo text={"Login to your account"}/>

                        <FormComponent/>

                        <p className='primary text-center mb-5'>Forgot password?</p>
                        
                    </Col>
                    </Row>
             </Container>



        </>
    );
};

export default LoginPage;