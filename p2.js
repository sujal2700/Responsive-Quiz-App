const quizDB = [{
        question: "Q1: What is odd one out of following?",
        /*          An object consisting of quiz questions and answers   where ans stores the correct answer    */
        a: "Vue",
        b: "React",
        c: "Angular",
        d: "Node",
        ans: "ans4"
    },
    {
        question: "Q2: Which is not a backend Language?",
        a: "HTML",
        b: "Java",
        c: "Js",
        d: "Python",
        ans: "ans1"
    },
    {
        question: "Q3: What keyword is used to create a JavaScript variable?",
        a: "variable",
        b: "varies",
        c: "var",
        d: "string",
        ans: "ans3"
    },
    {
        question: "Q4: Which is not a JavaScript data type?",
        a: "Integer",
        b: "Double",
        c: "Boolean",
        d: "undefined",
        ans: "ans2"
    },
    {
        question: "Q5: What property is used to change the text color of an element?",
        a: "fontcolor",
        b: "textcolor",
        c: "color",
        d: "none",
        ans: "ans3"
    },
    {
        question: "Q6: The # symbol specifies that the selector is?",
        a: "class",
        b: "tag",
        c: "first",
        d: "id",
        ans: "ans4"
    },
    {
        question: "Q7: what value is given for the left margin in : margin: 5px 10px 3px 8px;",
        a: "5px",
        b: "8px",
        c: "3px",
        d: "10px",
        ans: "ans2"
    },
    {
        question: "Q8: What is odd one out of following?",
        a: "Vue",
        b: "React",
        c: "Angular",
        d: "Node",
        ans: "ans4"
    },
    {
        question: "Q9: var a = []; What does 'typeof a' return?",
        a: "object",
        b: "array",
        c: "string",
        d: "undefined",
        ans: "ans2"
    },
    {
        question: "Q10: How can you print information to the console?",
        a: "console(info)",
        b: "console.log(info)",
        c: "print(info)",
        d: "All of the above",
        ans: "ans2"
    },
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0; // It is a question counting variable 
let score = 0; // A variable to count score 
// A user defined function to load the questions
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();
/* A function to store the answer selected by user 
 A forEach loop is used for the same to iterate over the options */
const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};
/* A function used to deselect the option which is been selected by default */
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    // Checking of the stored answer from the ans variable of the object 
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectAll();
    /*  Checks whether quiz is over or not by comapring 
      the value of variable questionCount with length of object  if less then new question
      keeps on loading*/
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
         <h3> Your Score  ${score}/${quizDB.length} </h3>
         <center><button class="btn" onclick="location.reload()"> Re-take Quiz </button></center>
       `;
        showScore.classList.remove('scoreArea');

    }
    if (questionCount == quizDB.length) {
        alert('You have answered all the questions!');
    }
});