import React, {Component} from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Col from "muicss/lib/react/col";
import Row from "muicss/lib/react/row";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [{label: "Cash", value: 0}, {label: "Sales", value: 0}],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleAddAcctClick(e) {
    e.preventDefault();
    alert("click");
  }
  handleInputChange(e) {
    var accts = this.state.accounts;
    var acct = accts.findIndex(acct => acct.label === e.target.id);
    console.log(acct);
    var val = accts[acct].value.toString() + e.target.value.toString();
    accts[acct].value = val;
    console.log(accts);
    this.setState({accounts: accts});
  }
  render() {
    let Accounts = this.props.accounts.filter(acct => acct.label !== "Cash");
    //	Accounts.splice(0, 1)
    let AccountOptions = Accounts.map((acct, i) => (
      <Option value={acct.label} label={acct.label} key={i.toString()} />
    ));
    let transactionAccounts = this.state.accounts.filter(
      acct => acct.label !== "Cash",
    );
    let AcctRows = transactionAccounts.map((acct, i) => (
      <Row key={i}>
        <Col md="5">
          <Input
            floatingLabel={true}
            label="Amount"
            id={acct.label}
            value={acct.value > 0 ? acct.value : ""}
            onChange={this.handleInputChange}
          />
        </Col>
        <Col md="7">
          <Select defaultValue={acct.label}>
            {AccountOptions}
          </Select>
        </Col>
      </Row>
    ));
    return (
      <div id="transactionForm" className="appPanel">
        <h2>Add Transaction</h2>
        <Form style={{height: "450px", overflowY: "scroll"}}>

          <Input type="date" label="Date" />
          <h4>Accounts</h4>
          <Row>
            <Col md="5">
              <Input floatingLabel={true} label="Amount" />
            </Col>
            <Col md="7">
              <aside>Cash</aside>
            </Col>
          </Row>
          {AcctRows}
          {/*<Row>
            <Col md="5">
              <Input floatingLabel={true} label="Amount" />
            </Col>
            <Col md="7">
              <Select defaultValue="Sales">
                {AccountOptions}
              </Select>
            </Col>
          </Row> */}
          <div className="mui--clearfix" />
          <Button variant="raised" onClick={this.handleAddAcctClick}>
            Add Account
          </Button>
          <Input floatingLabel={true} label="Description" />
          <Button variant="raised">Submit Transaction</Button>
        </Form>
      </div>
    );
  }
}

export default TransactionForm;
