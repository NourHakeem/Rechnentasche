let result = document.getElementById("result");

function inputNumber(num) {
    result.value += num;
}

function inputOperator(operator) {
    result.value += operator;
}

function clearResult() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function addcloseklammern() {
    result.value += ")";
}

function addopenklammern() {
    result.value += "(";
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}