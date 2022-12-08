import Ingredient from './ingredient';

export default function IngredientList({ingredients, amountChangeHandler, removeHandler}) {
  const ingredientComponents = ingredients.map((ingredient) =>
    <Ingredient
      key={ingredient.id.toString()}
      id={ingredient.id}
      name={ingredient.name}
      amount={ingredient.amount}
      amountChangeHandler={amountChangeHandler}
      removeHandler={removeHandler}
    />
  );

  return (
    <tbody id="ingredient-list">
      {ingredientComponents}
    </tbody>
  );
}
