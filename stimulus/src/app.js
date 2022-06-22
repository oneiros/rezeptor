import { Application } from "@hotwired/stimulus"

import RecipeController from "./controllers/recipe_controller"
import IngredientController from "./controllers/ingredient_controller"

import AppendController from "./controllers/append_controller"
import DismissController from "./controllers/dismiss_controller"
import StepController from "./controllers/step_controller"

window.Stimulus = Application.start()
Stimulus.register("recipe", RecipeController)
Stimulus.register("ingredient", IngredientController)

Stimulus.register("append", AppendController)
Stimulus.register("dismiss", DismissController)
Stimulus.register("step", StepController)
