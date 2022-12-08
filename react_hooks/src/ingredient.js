export default function Ingredient({id, amount, name, amountChangeHandler, removeHandler}) {
  function handleAmountDecrease(event) {
    event.preventDefault();
    amountChangeHandler("decrease", id);
  }

  function handleAmountIncrease(event) {
    event.preventDefault();
    amountChangeHandler("increase", id);
  }

  function handleRemove(event) {
    event.preventDefault();
    removeHandler(id);
  }

  return (
    <tr>
      <td>
        <button
          type="button"
          onClick={handleAmountDecrease}
          className="decrease-amount btn btn-primary btn-sm">
          -
        </button>
        <input 
          type="number"
          name={"ingredient[" + id + "][amount]"}
          value={amount}
          readOnly
          className="form-control d-inline w-auto"
        />
        <button
          type="button"
          onClick={handleAmountIncrease}
          className="increase-amount btn btn-primary btn-sm">
          +
        </button>
      </td>
      <td>
        <input
          type="text"
          name={"ingredient[" + id + "][name]"}
          value={name}
          readOnly
          className="w-100 form-control"
        />
      </td>
      <td>
        <button
          type="button"
          onClick={handleRemove}
          className="remove-ingredient btn btn-danger">
          Remove
        </button>
      </td>
    </tr>
  );
}
