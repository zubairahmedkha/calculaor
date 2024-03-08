"use strict";
/*function calc(num1: number, opp: string, num2: number): void {
    let validOperators: string[] = ["+", "-", "*", "/"];

    if (validOperators.includes(opp)) {
        switch (opp) {*/
function calc(num1, opp, num2) {
    let operator = ["+", "-", "*", "/"];
    if (opp[0] == "+") {
        console.log(num1 + num2);
    }
    else if (opp[1] == "-") {
        console.log(num1 - num2);
    }
    else if (opp[2] == "*") {
        console.log(num1 * num2);
    }
    else if (opp[3] == "/") {
        console.log(num1 / num2);
    }
}
calc(5, "*", 5);
