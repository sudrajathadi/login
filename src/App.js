import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import ForgetPage from './components/ForgetPage';
import {Container,Row} from "react-bootstrap";
import ChangePassword from './components/ChangePassword';
import AlertConfirmation from './components/AlertConfirmation';
import Relogin from './components/Relogin.js';
import Expired from './components/Expired.js';

function App() {
  return (
    <>
    <Container className="mw-100 pt-5 pb-5 bg-light">
      <Row>
      <LoginPage/>
      </Row>

      <Row>
      <ForgetPage/>
      </Row>

      <Row>
        <ChangePassword/>
      </Row>

      <Row>
        <AlertConfirmation/>
      </Row>

      <Row>
        <Relogin/>
      </Row>

      <Row>
        <Expired/>
      </Row>

    </Container>
    </>
    
  );
}

export default App;
