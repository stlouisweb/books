import React, {Component} from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';

class TransactionForm extends Component {
  render() {
    return (
      <div id="transactionForm" className="appPanel">
        <h2>Add Transaction</h2>
      </div>
    );
  }
}

export default TransactionForm;
