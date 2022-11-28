var arg1 = 0;
var operator = "";
var arg2 = "";
var displayDiv = document.querySelector("#display");

function press(number) {
  if (operator == "") {
    if (arg1.toString().includes(".") && number == ".") {
      return;
    }
    if (displayDiv.innerText == "0" && number != ".") {
      displayDiv.innerText = "";
    }
    arg1 = displayDiv.innerText + number;
    displayDiv.innerText = arg1;
  } else {
    if (arg2.toString().includes(".") && number == ".") {
      return;
    }
    if (displayDiv.innerText == "0" && number != ".") {
      displayDiv.innerText = "";
    }
    arg2 = "" + arg2 + number;
    displayDiv.innerText = arg2;
  }
}
function setOP(op) {
  operator = op;
  console.log(operator);
}

function calculate() {
  if (arg1 == "" && arg2 == "" && operator == "") {
    return;
  }
  if (operator == "/") {
    arg1 = parseFloat(arg1) / parseFloat(arg2);
  }
  if (operator == "+") {
    arg1 = parseFloat(arg1) + parseFloat(arg2);
  }
  if (operator == "*") {
    arg1 = parseFloat(arg1) * parseFloat(arg2);
  }
  if (operator == "-") {
    arg1 = parseFloat(arg1) - parseFloat(arg2);
  }

  displayDiv.innerText = arg1;

  arg1 = "";
  arg2 = "";
  operator = "";
}

function clr() {
  arg1 = "";
  arg2 = "";
  operator = "";

  displayDiv.innerText = "0";
}
