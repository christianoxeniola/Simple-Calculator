var num1, num2, result;
function setValues() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
}
function add() {
    setValues();
    result = num1+num2;
    alert(result);
}
function subtract() {
    setValues();
    result = num1-num2;
    alert(result);
}
function multiply() {
    setValues();
    result = num1*num2;
    alert(result);
}
function divide() {
    setValues();
    result = num1/num2;
    alert(result);
}
