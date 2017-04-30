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
			accounts: [],
			counter: 0,
		}
		this.handleAddAcctClick = this.handleAddAcctClick.bind(this)
		this.handleDeleteRow = this.handleDeleteRow.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.updateRow = this.updateRow.bind(this)
	}

	handleAddAcctClick(e) {
		e.preventDefault()
		let Accounts = this.props.accounts.filter(acct => acct.label !== "Cash")
		let AcctLabels = Accounts.map(acct => acct.label)
		let counter = this.state.counter + 1
		let key = guid()
		var rows = this.state.accounts

		function guid() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
			}
			return s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4()
		}

		rows.push({key: key, options: AcctLabels, value: "", selectedOption: ""})

		this.setState({accounts: rows, counter: counter})
	}
	updateRow(val, key) {
		console.log(val)
		console.log(key)
		let index = this.state.accounts.findIndex(acct => acct.key === key)
		console.log(index)
		let row = this.state.accounts[index]
		console.log(row)
		row.value = val
	}
	handleSubmit(e) {
		e.preventDefault()
		this.state.accounts.forEach(row => console.log(row))
	}
	handleDeleteRow(event) {
		let rows = this.state.accounts.filter(acct => acct.key !== event.target.id)
		let counter = this.state.counter - 1
		this.setState({accounts: rows, counter: counter})

    //var rows = this.state.accounts - 1;
    //this.setState({accounts: rows});
	}
	render() {
		let accounts = this.state.accounts.map(acct => (
      <AccountRow
        options={acct.options}
        key={acct.key}
        rowKey={acct.key}
        deleteRow={this.handleDeleteRow}
        updateInput={this.updateRow}
      />
    ))
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
          {accounts}
          <div className="mui--clearfix" />
          <Button variant="raised" onClick={this.handleAddAcctClick}>
            Add Account
          </Button>
          <Input floatingLabel={true} label="Description" />
          <Button variant="raised" onClick={this.handleSubmit}>
            Submit Transaction
          </Button>
        </Form>
      </div>
		)
	}
}

export default TransactionForm
