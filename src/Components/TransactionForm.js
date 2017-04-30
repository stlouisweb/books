import React, {Component} from "react"
import Form from "muicss/lib/react/form"
import Input from "muicss/lib/react/input"
import Button from "muicss/lib/react/button"
import Col from "muicss/lib/react/col"
import Row from "muicss/lib/react/row"
import AccountRow from "./AccountRow.js"

class TransactionForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			accounts: 0,
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleAddAcctClick = this.handleAddAcctClick.bind(this)
	}
	handleAddAcctClick(e) {
		e.preventDefault()
		var rows = this.state.accounts + 1
		this.setState({accounts: rows})
	}
	handleInputChange(e) {
		console.log(e)
	}
	render() {
		let Accounts = this.props.accounts.filter(acct => acct.label !== "Cash")
		let AcctLabels = Accounts.map(acct => acct.label)
		let AccountRows = []
		for (var i = 0; i < this.state.accounts; i++) {
			AccountRows.push(<AccountRow options={AcctLabels} key={i.toString()} />)
		}

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
          {AccountRows}
          <div className="mui--clearfix" />
          <Button variant="raised" onClick={this.handleAddAcctClick}>
            Add Account
          </Button>
          <Input floatingLabel={true} label="Description" />
          <Button variant="raised">Submit Transaction</Button>
        </Form>
      </div>
		)
	}
}

export default TransactionForm
