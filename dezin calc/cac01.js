"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
function welcome() {
    return __awaiter(this, void 0, void 0, function* () {
        let neon = chalk_animation_1.default.neon("Let's start the calculation");
        yield sleep();
        neon.stop();
        console.log(`     _____________________
    |  _________________  |
    | | Essakhan       0.  | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
    });
}
await welcome();
function askQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        const ans = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "operator",
                message: "Which operation do you want to perform?\n",
                choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            },
            {
                type: "number",
                name: "num1",
                message: "Enter the first number",
            },
            {
                type: "number",
                name: "num2",
                message: "Enter the second number",
            },
        ]);
        let res;
        if (ans.operator === "Addition") {
            res = ans.num1 + ans.num2;
        }
        else if (ans.operator === "Subtraction") {
            res = ans.num1 - ans.num2;
        }
        else if (ans.operator === "Multiplication") {
            res = ans.num1 * ans.num2;
        }
        else if (ans.operator === "Division") {
            res = ans.num1 / ans.num2;
        }
        console.log(`Result is ${res}`);
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            yield askQuestion();
            var again = yield inquirer_1.default
                .prompt({
                type: "input",
                name: "choice",
                message: "To continue calcluation press y \n or press any other key to end the program"
            });
        } while (again.choice == 'y');
    });
}
start();
