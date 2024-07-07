#! /usr/bin/env node

import inquirer from "inquirer";

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
        
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q-1. What is the correct way to check if two values are not equal in TypeSecript? ",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q-2. Which of the following characters is commonly allowed in variable names in TypeScript? ",
        choices: ["$", "@", "#", "&"]
    },{
        name: "question_3",
        type: "list",
        message: "Q-3. Which operator is commonly used for string concatenation in TypeSecript? ",
        choices: ["+", "-", "*", "/"]
    },{
        name: "question_4",
        type: "list",
        message: "Q-4. In TypeSecript, which symbol is commonly used to termindate a statement? ",
        choices: [".", ":", ";", ","]
    },{
        name: "question_5",
        type: "list",
        message: "Q-5. Which method of Inquirer.js is used to start the prompt interface and receive user input? ",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);

let score: number = 0;

switch (quiz.question_1){
 case "a !== b":
    console.log("Q-1 is Correct..!");
    ++score;
    break;
    default:
        console.log("Q-1 is Incorrect");
}
switch (quiz.question_2){
 case "$":
    console.log("Q-2 is Correct..!");
    ++score;
    break;
    default:
        console.log("Q-2 is Incorrect");
}

switch (quiz.question_3){
    case "+":
       console.log("Q-3 is Correct..!");
       ++score;
       break;
       default:
           console.log("Q-3 is Incorrect");
   }

   switch (quiz.question_4){
    case ";":
       console.log("Q-4 is Correct..!");
       ++score;
       break;
       default:
           console.log("Q-4 is Incorrect");
   }

   switch (quiz.question_5){
    case "prompt()":
       console.log("Q-5 is Correct..!");
       ++score;
       break;
       default:
           console.log("Q-5 is Incorrect");
   }

   console.log(`Score: ${score}`);
   
   