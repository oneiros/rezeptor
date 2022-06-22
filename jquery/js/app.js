$(function() {
  $("form#new-ingredient button").click(function(event) {
    event.preventDefault();
    var nameInput = $("form#new-ingredient input[name=name]")
    var template = $($("form#new-ingredient template").html());
    template.find("input[name=\"ingredients[NUMBER][name]\"]").val(nameInput.val());
    var numberOfIngredients = $("#ingredient-list").children().length;
    template.find("input").each(function(index, element) {
      var input = $(element);
      input.attr("name", input.attr("name").replace("NUMBER", numberOfIngredients + 1));
    });
    $("#ingredient-list").append(template);
    nameInput.val("");
  });

  $("#ingredient-list").on("click", ".decrease-amount", function(event) {
    event.preventDefault();
    var button = $(this);
    var amountField = button.parent().find("input[type=number]");
    amountField.val(parseInt(amountField.val()) - 1);
  });

  $("#ingredient-list").on("click", ".increase-amount", function(event) {
    event.preventDefault();
    var button = $(this);
    var amountField = button.parent().find("input[type=number]");
    amountField.val(parseInt(amountField.val()) + 1);
  });

  $("#ingredient-list").on("click", ".remove-ingredient", function(event) {
    event.preventDefault();
    var button = $(this);
    button.closest("tr").remove();
  });
});
