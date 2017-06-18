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
			editAccounts: [],
			counter: 0,
			dateValue: "",
			cashValue: "",
			descValue: "",
		}
		this.handleAddAcctClick = this.handleAddAcctClick.bind(this)
		this.handleDeleteRow = this.handleDeleteRow.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.updateRow = this.updateRow.bind(this)
		this.updateDate = this.updateDate.bind(this)
		this.updateCash = this.updateCash.bind(this)
		this.updateDescription = this.updateDescription.bind(this)
	}

	handleAddAcctClick(e) {
		e.preventDefault()
		let Accounts = this.props.accounts.filter(acct => acct.label !== "Cash")
		let AcctLabels = Accounts.map(acct => acct.label)
		let counter = this.state.counter + 1
		let key = guid()
		var rows = this.state.editAccounts

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

		this.setState({editAccounts: rows, counter: counter})
	}
	updateDescription(event) {
		this.setState({descValue: event.target.value})
	}
	updateCash(event) {
		this.setState({cashValue: event.target.value})
	}
	updateDate(event) {
		this.setState({dateValue: event.target.value})
	}
	updateRow(val, key, option) {
		let index = this.state.editAccounts.findIndex(acct => acct.key === key)
		let row = this.state.editAccounts[index]
		row.value = val
		row.selectedOption = option
		let accts = this.state.editAccounts
		accts[index] = row
		this.setState({editAccounts: accts})
	}
	handleSubmit(e) {
		e.preventDefault()
		const TRANSACTION = {}
		TRANSACTION.date = this.state.dateValue
		TRANSACTION.description = this.state.descValue
		TRANSACTION.cash = this.state.cashValue
		this.state.editAccounts.forEach(
			row => TRANSACTION[row.selectedOption.toLowerCase()] = row.value
		)
		this.props.updateAccounts(TRANSACTION)
		this.setState({
			editAccounts: [],
			counter: 0,
			dateValue: "",
			cashValue: "",
			descValue: "",
		})
	}
	handleDeleteRow(event) {
		let rows = this.state.accounts.filter(acct => acct.key !== event.target.id)
		let counter = this.state.counter - 1
		this.setState({accounts: rows, counter: counter})
	}
	render() {
		let accounts = this.state.editAccounts.map(acct => (
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
					<Input
						type="date"
						label="Date"
						onChange={this.updateDate}
						value={this.state.dateValue}
					/>
					<h4>Accounts</h4>
					<Row>
						<Col md="5">
							<Input
								floatingLabel={true}
								label="Amount"
								onChange={this.updateCash}
								value={this.state.cashValue}
							/>
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
					<Input
						floatingLabel={true}
						label="Description"
						onChange={this.updateDescription}
						value={this.state.descValue}
					/>
					<Button variant="raised" onClick={this.handleSubmit}>
						Submit Transaction
					</Button>
				</Form>
			</div>
		)
	}
}

export default TransactionForm
