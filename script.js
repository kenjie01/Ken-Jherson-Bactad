const quiz = [
    {
        "subject": "Sport",
        "quiz": [
            {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        ]
    },
    {
        "subject": "Math",
        "quiz": [
            {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        ]
    }
];

// Loop through each subject in the quiz
for (let i = 0; i < quiz.length; i++) {
    console.log("Subject: " + quiz[i].subject);

    // Loop through each question in the subject
    for (let j = 0; j < quiz[i].quiz.length; j++) {
        console.log("Question " + (j + 1) + ": " + quiz[i].quiz[j].question);
        console.log("Answer: " + quiz[i].quiz[j].answer);
        console.log("-----------------------");
    }
}
let num1 = 5;
let num2 = 2;
let num3 = 10;

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log("Sum of three numbers: " + sum(num1, num2, num3));

function difference(num3, num2) {
  return num3 - num2;
}
console.log("Difference of two numbers: " + difference(num3, num2));

function product(num1, num2) {
  return num1 * num2;
}
console.log("Product of two numbers: " + product(num1, num2));


function average(num3, num1){
    return num3 / num1;
}
console.log("Average of two numbers: " + average(num3, num1));