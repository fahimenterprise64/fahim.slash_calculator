#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operator to perfrom action.", type: "list", name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
console.log(answer);
console.log("==================================================");
if (answer.operator === "addition") {
    console.log("your value is : " + +(answer.firstnumber + answer.secondnumber));
}
else if (answer.operator === "subtraction") {
    console.log("your value is : " + (answer.firstnumber - answer.secondnumber));
}
else if (answer.operator === "multiplication") {
    console.log("your value is : " + (answer.firstnumber * answer.secondnumber));
}
else if (answer.operator === "division") {
    console.log("your value is : " + (answer.firstnumber / answer.secondnumber));
}
