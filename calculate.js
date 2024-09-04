function calculate(firstNum,secondNum,operation) {
    if (firstNum != null && secondNum != null && operation != null) {
        if (typeof firstNum !== "number" || typeof secondNum !== "number") {
            throw new Error("Invalid input: firstNum and secondNum must be numbers");
        }
            switch (operation) {
                case "add":
                    return firstNum + secondNum;
                case "subtract":
                    return firstNum - secondNum;
                case "multiply":
                    return firstNum * secondNum;
                case "divide":
                    return firstNum / secondNum;
                default:
                    throw new Error("Invalid operation");
            }
        
    } else {
        throw new Error("Invalid input: cannot ba null");
    }   
}

const answer = calculate(5, 6, 'multiply');

console.log(answer);

