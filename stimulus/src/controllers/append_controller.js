import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["list", "template", "form"]

  addEntry(event) {
    event.preventDefault()
    const newEntry = this.templateTarget
      .content
      .firstElementChild
      .cloneNode(true)
    for (const input of this.formTarget.querySelectorAll("input")) {
      const matchingInput = newEntry.querySelector(`input[data-name="${input.name}"]`)
      if (matchingInput) matchingInput.value = input.value 
    }
    const numberOfEntries = this.listTarget.childElementCount;
    for (const input of newEntry.querySelectorAll("input")) {
      input.name = input.name.replace("NUMBER", numberOfEntries + 1)
    }
    this.listTarget.appendChild(newEntry)
    this.formTarget.reset()
  }
}
