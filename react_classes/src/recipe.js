import React from 'react';

import IngredientList from './ingredient_list';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      newName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleChange(event) {
    this.setState({newName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const ingredients = this.state.ingredients.slice();
    ingredients.push({
      id: this.state.ingredients.length + 1,
      amount: 1,
      name: this.state.newName,
    });
    this.setState({ingredients: ingredients, newName: ""});
  }

  handleRemove(id) {
    const ingredients = this.state.ingredients.filter((ingredient) => {
      return (ingredient.id != id);
    });
    this.setState({ingredients: ingredients});
  }

  handleAmountChange(action, id) {
    const ingredients = this.state.ingredients.map((ingredient) => {
      if (ingredient.id == id) {
        const toAdd = (action == "increase") ? 1 : -1;
        ingredient.amount += toAdd;
      }
      return ingredient;
    });
    this.setState({ingredients: ingredients});
  }

  render() {
    return (
      <div className="mt-4 mb-2">
        <div><strong>Ingredients</strong></div>
        <table className="table">
          <thead>
            <tr>
              <th className="w-25">Amount</th>
              <th className="w-50">Name</th>
              <th className="w-25"></th>
            </tr>
          </thead>
          <IngredientList
             amountChangeHandler={this.handleAmountChange}
             removeHandler={this.handleRemove}
             ingredients={this.state.ingredients}
          />
        </table>
        <div className="mt-5">
          <form id="new-ingredient" onSubmit={this.handleSubmit} >
            <label>
              Name:
              <input type="text" name="name" value={this.state.newName} onChange={this.handleChange} className="form-control" />
            </label>
            <button type="submit" className="btn btn-success">Add Ingredient</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Recipe;
