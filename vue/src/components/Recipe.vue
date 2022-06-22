<script>
import IngredientList from "./IngredientList.vue"

export default {
  components: {
    IngredientList,
  },
  methods: {
    addIngredient(event) {
      event.preventDefault()
      this.ingredients.push({
        id: this.ingredients.length + 1,
        name: this.newName,
        amount: 1
      })
      this.newName = ""
    },
    increaseAmount(id, by) {
      for (const ingredient of this.ingredients) {
        if (ingredient.id === id) {
          ingredient.amount += by
        }
      }
    },
    removeIngredient(id) {
      const ingredient = this.ingredients.find((ingredient) => {
        return (id === ingredient.id)
      })
      this.ingredients.splice(this.ingredients.indexOf(ingredient), 1)
    }
  },
  data() {
    return {
      ingredients: [],
      newName: ""
    }
  }
}
</script>

<template>
  <div class="mt-4 mb-2">
    <div><strong>Ingredients</strong></div>
    <table class="table">
      <thead>
        <tr>
          <th class="w-25">Amount</th>
          <th class="w-50">Name</th>
          <th class="w-25"></th>
        </tr>
      </thead>
      <IngredientList 
        :ingredients="ingredients"
        @increaseAmount="increaseAmount"
        @removeIngredient="removeIngredient"
      />
    </table>
    <div class="mt-5">
      <form id="new-ingredient" @submit="addIngredient" >
        <label>
          Name:
          <input type="text" name="name" v-model="newName" class="form-control">
        </label>
        <button type="submit" class="btn btn-success">Add Ingredient</button>
      </form>
    </div>
  </div>
</template>
