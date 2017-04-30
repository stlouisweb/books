import React, {Component} from 'react';
import '../node_modules/muicss/dist/css/mui.min.css';
import './App.css';
import 'whatwg-fetch';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import TransactionForm from './Components/TransactionForm.js';
import AccountsTable from './Components/AccountsTable.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col xs="12" sm="6" style={{paddingRight: '7px'}}>
              <TransactionForm />
            </Col>
            <Col xs="12" sm="6" style={{paddingLeft: '7px'}}>
              <AccountsTable />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
