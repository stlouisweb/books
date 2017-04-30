import React, {Component} from "react"
import Col from "muicss/lib/react/col"
import Row from "muicss/lib/react/row"
import Input from "muicss/lib/react/input"
import Option from "muicss/lib/react/option"
import Select from "muicss/lib/react/select"

class AccountRow extends Component {
	render() {
		const AccountOptions = this.props.options.map((option, i) => (
      <Option value={option} label={option} key={i.toString()} />
    ))
		return (
      <Row>
        <Col md="4">
          <Input floatingLabel={true} label="Amount" />
        </Col>
        <Col md="6">
          <Select>
            {AccountOptions}
          </Select>
        </Col>
        <Col md="2" className="mui--text-center">
          <span className="deleteRow" onClick={this.props.deleteRow}>X</span>
        </Col>
      </Row>
		)
	}
}

export default AccountRow
