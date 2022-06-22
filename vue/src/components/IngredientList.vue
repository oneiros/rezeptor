<script>
  import Ingredient from "./Ingredient.vue"

  export default {
    components: {
      Ingredient
    },
    emits: ["increaseAmount", "removeIngredient"],
    props: ["ingredients"],
  }
</script>

<template>
  <tbody id="ingredient-list">
    <Ingredient
      v-for="ingredient in ingredients"
      :key="ingredient.id.toString()"
      :id="ingredient.id"
      :name="ingredient.name"
      :amount="ingredient.amount"
      @increaseAmount="(id, by) => $emit('increaseAmount', id, by)"
      @removeIngredient="(id) => $emit('removeIngredient', id)"
    />
  </tbody>
</template>
