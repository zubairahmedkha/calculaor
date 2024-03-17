//data collecter
import { Console } from "console";
import inquirer from "inquirer";

const answer = await inquirer.prompt([{
    message:"Entre your name",type:"string",name:"Name:"},
{message:"Enter your fahter name",type:"string",name:"Fname:"},
{massage:"Enter  your date of birth ",type:"number" ,name:"DOB:"    },
{massage:"Entre CNIC number ex(00000000000000)",type:"number", name:"cnic no.:" },])
console.log(answer)

