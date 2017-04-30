import React, {Component} from "react"

class AccountsTable extends Component {
	render() {
		let Accounts = this.props.accounts.map((acct, i) => (
      <li key={i.toString()}>
        <span className="mui--pull-left">
          {acct.label}
        </span>
        <span className="mui--pull-right">
          {acct.value && acct.value !== 0 ? "$ " + acct.value : " - "}
        </span>
        <div className="mui--clearfix" />
      </li>
    ))
		return (
      <div id="accountsTable" className="appPanel">
        <h2>Accounts</h2>
        <ul>
          {Accounts}
        </ul>
      </div>
		)
	}
}

export default AccountsTable
