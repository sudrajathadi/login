import React from 'react';
import {Alert, Col, Container, Row} from "react-bootstrap";
import Logo from './Logo';
import Checklist from '../img/Checklist.png';
import AlertComponent from '../AlertComponent';



const AlertConfirmation = (props) => {
    
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
                        <Logo/>
                        <AlertComponent alert={"You will receive an email with instruction on how to reset your password in a few minutes"}/>
                        <p className='primary text-center mb-5'>Back to login</p>
                    </Col>
                    </Row>
             </Container>



        </>
    );
};

export default AlertConfirmation;