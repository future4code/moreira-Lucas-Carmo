const calculator = () => {
    const operator = process.argv[2].toLowerCase()
    const num1 = Number(process.argv[3])
    const num2 = Number(process.argv[4])

    switch (operator){
        case "add":
            return num1 + num2;
        case "sub":
            return num1 - num2;
        case "div":
            return num1 / num2;
        case "mul":
            return num1 * num2;
        default:
            return "Entrada inválida."
    }
}
console.log(calculator())