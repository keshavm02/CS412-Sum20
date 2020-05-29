const evaluate = expression => {
    const firstDigit = parseInt(expression[0]);
    const lastDigit = parseInt(expression[2]);
    const operator = expression[1];

    switch(operator) {
        case '+': return firstDigit+lastDigit;
        case '-': return firstDigit-lastDigit;
        case '*': return firstDigit*lastDigit;
        case '/': return firstDigit/lastDigit;
    }
}

console.log(`4+2 = ${evaluate('4+2')}`);
console.log(`5*7 = ${evaluate('5*7')}`);
console.log(`6-1 = ${evaluate('6-1')}`);
console.log(`9/2 = ${evaluate('9/2')}`);

module.exports = {evaluate};