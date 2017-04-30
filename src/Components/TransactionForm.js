import React, {Component} from "react"
import Form from "muicss/lib/react/form"
import Input from "muicss/lib/react/input"
import Textarea from "muicss/lib/react/textarea"
import Button from "muicss/lib/react/button"
import Checkbox from "muicss/lib/react/checkbox"
import Col from "muicss/lib/react/col"
import Row from "muicss/lib/react/row"
import Option from "muicss/lib/react/option"
import Select from "muicss/lib/react/select"

class TransactionForm extends Component {
	handleAddAcctClick() {
		alert("click")
	}

	render() {
		let Accounts = this.props.accounts.filter(acct => acct.label !== "Cash")
    //	Accounts.splice(0, 1)
		let AccountOptions = Accounts.map((acct, i) => (
      <Option value={acct.label} label={acct.label} key={i.toString()} />
    ))
		return (
      <div id="transactionForm" className="appPanel">
        <h2>Add Transaction</h2>
        <Form style={{height: "450px", overflowY: "scroll"}}>

          <Input type="date" hint="Date" />
          <h4>Accounts</h4>
          <Row>
            <Col md="5">
              <Input hint="Amount" />
            </Col>
            <Col md="7">
              <label>Cash</label>
            </Col>
          </Row>
          <Row>
            <Col md="5">
              <Input hint="Amount" />
            </Col>
            <Col md="7">
              <Select defaultValue="Sales">
                {AccountOptions}
              </Select>
            </Col>
          </Row>
          <div className="mui--clearfix" />
          <Button variant="raised" onClick={this.handleAddAcctClick}>
            Add Account
          </Button>
          <Input hint="Description" />
          <Button variant="raised">Submit Transaction</Button>
        </Form>
      </div>
		)
	}
}

export default TransactionForm
