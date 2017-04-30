import React, {Component} from "react"
import Col from "muicss/lib/react/col"
import Row from "muicss/lib/react/row"
import Input from "muicss/lib/react/input"
import Option from "muicss/lib/react/option"
import Select from "muicss/lib/react/select"

class AccountRow extends Component {
	render() {
		console.log(this.props.options)
		const AccountOptions = this.props.options.map((option, i) => (
      <Option value={option} label={option} key={i.toString()} />
    ))
		return (
      <Row>
        <Col md="5">
          <Input floatingLabel={true} label="Amount" />
        </Col>
        <Col md="7">
          <Select>
            {AccountOptions}
          </Select>
        </Col>
      </Row>
		)
	}
}

export default AccountRow
