<script>
  export default {
    emits: ["increaseAmount", "removeIngredient"],
    props: ["id", "amount", "name"],

  }
</script>

<template>
  <tr>
    <td>
      <button
        type="button"
        @click="$emit('increaseAmount', id, -1)"
        class="decrease-amount btn btn-primary btn-sm">
        -
      </button>
      <input 
        type="number"
        :name="`ingredient[${this.id}][amount]`"
        :value="amount"
        readOnly
        class="form-control d-inline w-auto"
      >
      <button
        type="button"
        @click="$emit('increaseAmount', id, 1)"
        class="increase-amount btn btn-primary btn-sm">
        +
      </button>
    </td>
    <td>
      <input
        type="text"
        :name="`ingredient[${this.id}][name]`"
        :value="name"
        readOnly
        class="w-100 form-control"
      >
    </td>
    <td>
      <button
        type="button"
        @click="$emit('removeIngredient', id)"
        class="remove-ingredient btn btn-danger">
        Remove
      </button>
    </td>
  </tr>
</template>
