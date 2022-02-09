import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";
import Danger from '../img/Danger.png';

const AlertComponentFail = (props) => {
  return <div>

    <Alert variant="danger">
        <Row>
            <Col className="d-flex align-content-center flex-wrap" xs={2}>
            <img className="mx-auto d-block justify-content-center w-75" src={Danger}></img>
            
            </Col>    
            <Col xs={10} className="d-flex align-items-center">
            <p className="mb-0 small ">{props.alert}</p>
            </Col>
        </Row>                
    </Alert>
  </div>;
};

export default AlertComponentFail;
