"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([{
        message: "Entre your name", type: "string", name: "Name:"
    },
    { message: "Enter your fahter name", type: "string", name: "Fname:" },
    { massage: "Enter  your date of birth ", type: "number", name: "DOB:" },
    { massage: "Entre CNIC number ex(00000000000000)", type: "number", name: "cnic no.:" },]);
