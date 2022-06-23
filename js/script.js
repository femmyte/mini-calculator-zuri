let num1 = Number(prompt('Enter the First Operand'))
// let operator
let num2
// let operators = ['+', '-', '*', '/', '%']
if (isNaN(num1)) {
    alert('Invalid Operand suply Number only')
    exit()
}
let operator = prompt('Enter Operator')
num2 = Number(prompt('Enter the Second Operand'))
    if (operator === '+') {
        alert(num1 + num2)
    } else if (operator === '-') {
        alert(num1 - num2)
    } else if (operator === '/') {
        alert(num1 / num2)
    } else if (operator === '*') {
        alert(num1 * num2)
    } else if (operator === '%') {
        alert(num1 % num2)
    } else {
        alert('Invalid Operator Try again')
        // return;
    }

if (isNaN(num2)) {
    alert('Invalid Operand suply Number only')
    exit()
}