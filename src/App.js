import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/users';
import UserDetail from './components/user-detail';
import {Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <Users />
        </Col>
        <Col>
          <UserDetail />
        </Col>
      </Row>
    </div>
  );
}

export default App;
