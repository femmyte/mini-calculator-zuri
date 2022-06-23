let num1 = Number(prompt('Enter the First Operand'))
let operator
let num2
if (!isNaN(num1)) {
     operator = prompt('Enter Operator')
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
    
    num2 = Number(prompt('Enter the Second Operand'))
    
    if (isNaN(num2)) {
        alert('Invalid Operand suply Number only')
    }
    
} else {
   alert('Invalid Operand suply Number only')
}