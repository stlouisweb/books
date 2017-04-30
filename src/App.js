import React, {Component} from "react";
import "../node_modules/muicss/dist/css/mui.min.css";
import "./App.css";
import "whatwg-fetch";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import TransactionForm from "./Components/TransactionForm.js";
import AccountsTable from "./Components/AccountsTable.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getAccounts();
  }

  getAccounts() {
    let self = this;
    self.setState({loading: true});
    fetch(
      "https://script.google.com/macros/s/AKfycbzyPXDdpCTu7DTP5z11QYlqoe8bVKb387FOz0Q10gtAvPibsro/exec?totals",
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        let labels = Object.keys(json);
        let accounts = labels.map(label => ({
          label: label,
          value: json[label],
        }));
        self.setState({accounts: accounts, loading: false});
      });
  }

  render() {
    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col xs="12" sm="6" style={{paddingRight: "7px"}}>
              <TransactionForm accounts={this.state.accounts} />
            </Col>
            <Col xs="12" sm="6" style={{paddingLeft: "7px"}}>
              <AccountsTable accounts={this.state.accounts} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
