import React, {Component} from "react"
import Form from "muicss/lib/react/form"
import Input from "muicss/lib/react/input"
import Button from "muicss/lib/react/button"
import Col from "muicss/lib/react/col"
import Row from "muicss/lib/react/row"
import Option from "muicss/lib/react/option"
import Select from "muicss/lib/react/select"

class TransactionForm extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
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
