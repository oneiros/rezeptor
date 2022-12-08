import { useState } from 'react';

import IngredientList from './ingredient_list';

export default function Recipe() {
  const [ingredients, setIngredients] = useState([]);
  const [newName, setNewName] = useState("");

  function handleChange(event) {
    setNewName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newIngredient = {
      id: ingredients.length + 1,
      amount: 1,
      name: newName,
    };
    setIngredients([...ingredients, newIngredient]);
  }

  function handleRemove(id) {
    const newIngredients = ingredients.filter((ingredient) => {
      return (ingredient.id !== id);
    });
    setIngredients(newIngredients);
  }

  function handleAmountChange(action, id) {
    const newIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        const toAdd = (action === "increase") ? 1 : -1;
        ingredient.amount += toAdd;
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  }

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
           amountChangeHandler={handleAmountChange}
           removeHandler={handleRemove}
           ingredients={ingredients}
        />
      </table>
      <div className="mt-5">
        <form id="new-ingredient" onSubmit={handleSubmit} >
          <label>
            Name:
            <input type="text" name="name" value={newName} onChange={handleChange} className="form-control" />
          </label>
          <button type="submit" className="btn btn-success">Add Ingredient</button>
        </form>
      </div>
    </div>
  );
}
