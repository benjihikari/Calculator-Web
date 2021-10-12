let operatingA;
let operatingB;
let operation;

function init() {

    //Variables

    const result = document.getElementById(`result`);
    const reset = document.getElementById(`reset`);
    const sum = document.getElementById(`sum`);
    const subtraction = document.getElementById(`subtraction`);
    const multiplication = document.getElementById(`multiplication`);
    const division = document.getElementById(`division`);
    const equal = document.getElementById(`equal`);
    const one = document.getElementById(`one`);
    const two = document.getElementById(`two`);
    const three = document.getElementById(`three`);
    const four = document.getElementById(`four`);
    const five = document.getElementById(`five`);
    const six = document.getElementById(`six`);
    const seven = document.getElementById(`seven`);
    const eight = document.getElementById(`eight`);
    const nine = document.getElementById(`nine`);
    const cero = document.getElementById(`cero`);

    // Eventos click

    one.onclick = function (e) {
        result.textContent = result.textContent + "1";
    }
    two.onclick = function (e) {
        result.textContent = result.textContent + "2";
    }
    three.onclick = function (e) {
        result.textContent = result.textContent + "3";
    }
    four.onclick = function (e) {
        result.textContent = result.textContent + "4";
    }
    five.onclick = function (e) {
        result.textContent = result.textContent + "5";
    }
    six.onclick = function (e) {
        result.textContent = result.textContent + "6";
    }
    seven.onclick = function (e) {
        result.textContent = result.textContent + "7";
    }
    eight.onclick = function (e) {
        result.textContent = result.textContent + "8";
    }
    nine.onclick = function (e) {
        result.textContent = result.textContent + "9";
    }
    cero.onclick = function (e) {
        result.textContent = result.textContent + "0";
    }
    reset.onclick = function (e) {
        restart();
    }
    sum.onclick = function (e) {
        operatingA = result.textContent;
        operation = "+";
        clear();
    }
    subtraction.onclick = function (e) {
        operatingA = result.textContent;
        operation = "-";
        clear();
    }
    multiplication.onclick = function (e) {
        operatingA = result.textContent;
        operation = "*";
        clear();
    }
    division.onclick = function (e) {
        operatingA = result.textContent;
        operation = "/";
        clear();
    }
    equal.onclick = function (e) {
        operatingB = result.textContent;
        resolve();
    }

    function clear() {
        result.textContent = "";
    }

    function restart() {
        result.textContent = "";
        operatingA = 0;
        operatingB = 0;
        operation = "";
    }

    function resolve() {
        let res = 0;
        switch (operation) {
            case "+":
                res = parseFloat(operatingA) + parseFloat(operatingB);
                break;

            case "-":
                res = parseFloat(operatingA) - parseFloat(operatingB);
                break;

            case "*":
                res = parseFloat(operatingA) * parseFloat(operatingB);
                break;

            case "/":
                res = parseFloat(operatingA) / parseFloat(operatingB);
                break;
        }
        restart();
        result.textContent = res;
    }
}