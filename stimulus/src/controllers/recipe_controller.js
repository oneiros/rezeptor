import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["list", "template", "form", "newNameInput"]

  addIngredient(event) {
    event.preventDefault()
    const newIngredient = this.templateTarget
      .content
      .firstElementChild
      .cloneNode(true)
    newIngredient
      .querySelector("input[name=\"ingredients[NUMBER][name]\"]")
      .value = this.newNameInputTarget.value
    const numberOfIngredients = this.listTarget.childElementCount;
    for (const input of newIngredient.querySelectorAll("input")) {
      input.name = input.name.replace("NUMBER", numberOfIngredients + 1)
    }
    this.listTarget.appendChild(newIngredient)
    this.formTarget.reset()
  }
}
