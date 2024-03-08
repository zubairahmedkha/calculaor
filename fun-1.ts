1/*function sum(num:number, num1:number){

var myResult:number=num * num1;
console.log("result is",myResult);
}
sum(20,10);
sum(30,30);
sum(20,20);*/
/*function calc(num1: number, opp: string, num2: number): void {
    let validOperators: string[] = ["+", "-", "*", "/"];

    if (validOperators.includes(opp)) {
        switch (opp) {
            case "+":
                console.log(num1 + num2);
                break;
            case "-":
                console.log(num1 - num2);
                break;
            case "*":
                console.log(num1 * num2);
                break;
            case "/":
                if (num2 !== 0) {
                    console.log(num1 / num2);
                } else {
                    console.log("Cannot divide by zero");
                }
                break;
            default:
                console.log("Invalid operator");
        }
    } else {
        console.log("Invalid operator");
    }
}

// Example usage:
calc(5, "+", 3); // Output: 8
calc(8, "*", 4); // Output: 32
calc(10, "/", 2); // Output: 5
calc(5, "%", 2); // Output: Invalid operator*/
// greeter.ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const user = "John";
console.log(greet(user));












