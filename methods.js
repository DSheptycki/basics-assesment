var currentRow = 1;
var exampleUsed = false;
function AddIngredient() {
  var table = document.getElementById("your-recipe");
  var ingredient = document.getElementById("ingredient").value;
  var amount = document.getElementById("amount").value;
  var amountType = document.getElementById("amount-type").value;
  if (exampleUsed == true) {
    var row = table.insertRow(currentRow);
    currentRow += 1;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    if (amount > 1) {
      if (
        amountType == "Tsp" ||
        amountType == "Tbsp" ||
        amountType == "G" ||
        amountType == "Oz"
      ) {
        amountType += "'s";
      } else {
        amountType += "s";
      }
    }
    cell1.innerHTML = ingredient;
    cell2.innerHTML = amount;
    cell3.innerHTML = amountType;
  } else {
    if (amount > 1) {
      if (
        amountType == "Tsp" ||
        amountType == "Tbsp" ||
        amountType == "G" ||
        amountType == "Oz"
      ) {
        amountType += "'s";
      } else {
        amountType += "s";
      }
    }
    document.getElementById("example-cell-1").innerHTML = ingredient;
    document.getElementById("example-cell-2").innerHTML = amount;
    document.getElementById("example-cell-3").innerHTML = amountType;
    currentRow += 1;
    exampleUsed = true;
  }
}
function RemoveRow() {
  if (
    (exampleUsed == true && currentRow > 1) ||
    (exampleUsed == false && currentRow > 2)
  ) {
    if (exampleUsed == true) {
      currentRow -= 1;
      document.getElementById("your-recipe").deleteRow(currentRow);
      document.getElementById("test").innerHTML = exampleUsed;
      document.getElementById("test2").innerHTML = currentRow;
    }
    if (exampleUsed == false) {
      currentRow -= 1;
    }
  }
}
