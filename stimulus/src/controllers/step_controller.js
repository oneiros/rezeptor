import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"]

  decrease(event) {
    event.preventDefault()
    this.changeBy(-1)
  }

  increase(event) {
    event.preventDefault()
    this.changeBy(1)
  }

  changeBy(amount) {
    const oldValue = parseInt(this.inputTarget.value)
    this.inputTarget.value = oldValue + amount
  }
}
