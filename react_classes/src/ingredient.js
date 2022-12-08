import React from 'react';

class Ingredient extends React.Component {
  constructor(props) {
    super(props);
    this.handleAmountDecrease = this.handleAmountDecrease.bind(this);
    this.handleAmountIncrease = this.handleAmountIncrease.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAmountDecrease(event) {
    event.preventDefault();
    this.props.amountChangeHandler("decrease", this.props.id);
  }

  handleAmountIncrease(event) {
    event.preventDefault();
    this.props.amountChangeHandler("increase", this.props.id);
  }

  handleRemove(event) {
    event.preventDefault();
    this.props.removeHandler(this.props.id);
  }

  render() {
    return (
      <tr>
        <td>
          <button
            type="button"
            onClick={this.handleAmountDecrease}
            className="decrease-amount btn btn-primary btn-sm">
            -
          </button>
          <input 
            type="number"
            name={"ingredient[" + this.props.id + "][amount]"}
            value={this.props.amount}
            readOnly
            className="form-control d-inline w-auto"
          />
          <button
            type="button"
            onClick={this.handleAmountIncrease}
            className="increase-amount btn btn-primary btn-sm">
            +
          </button>
        </td>
        <td>
          <input
            type="text"
            name={"ingredient[" + this.props.id + "][name]"}
            value={this.props.name}
            readOnly
            className="w-100 form-control"
          />
        </td>
        <td>
          <button
            type="button"
            onClick={this.handleRemove}
            className="remove-ingredient btn btn-danger">
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default Ingredient;
