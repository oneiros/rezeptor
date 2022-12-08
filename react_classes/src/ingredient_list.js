import React from 'react';

import Ingredient from './ingredient';

class IngredientList extends React.Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient) =>
      <Ingredient
        key={ingredient.id.toString()}
        id={ingredient.id}
        name={ingredient.name}
        amount={ingredient.amount}
        amountChangeHandler={this.props.amountChangeHandler}
        removeHandler={this.props.removeHandler}
      />
    );

    return (
      <tbody id="ingredient-list">
        {ingredients}
      </tbody>
    );
  }
}

export default IngredientList;
