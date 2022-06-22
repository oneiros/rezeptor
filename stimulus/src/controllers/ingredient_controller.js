import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["amountInput"]

  decreaseAmount(event) {
    event.preventDefault()
    this.changeAmountBy(-1)
  }

  increaseAmount(event) {
    event.preventDefault()
    this.changeAmountBy(1)
  }

  changeAmountBy(amount) {
    const oldValue = parseInt(this.amountInputTarget.value)
    this.amountInputTarget.value = oldValue + amount
  }

  remove(event) {
    event.preventDefault()
    this.element.remove()
  }
}
