const questions = [
    {
        question: "Who is known as the founder of Java?",
        answers: [
            { text: "Guido van Rossum", correct: false },
            { text: "James Gosling", correct: true },
            { text: "Bjarne Stroustrup", correct: false },
            { text: "Dennis Ritchie", correct: false },
        ]
    },
    {
        question: "Which of the following is not a Java keyword?",
        answers: [
            { text: "static", correct: false },
            { text: "volatile", correct: false },
            { text: "extends", correct: false },
            { text: "main", correct: true },
        ]
    },
    {
        question: "What is the entry point of a Java program?",
        answers: [
            { text: "start() method", correct: false },
            { text: "run() method", correct: false },
            { text: "main() method", correct: true },
            { text: "init() method", correct: false },
        ]
    },
    {
        question: "Which of these is used for multi-line comments in Java?",
        answers: [
            { text: "// comment", correct: false },
            { text: "/* comment */", correct: true },
            { text: "", correct: false },
            { text: "# comment", correct: false },
        ]
    },
    {
        question: "What does JVM stand for?",
        answers: [
            { text: "Java Version Machine", correct: false },
            { text: "Java Virtual Memory", correct: false },
            { text: "Java Virtual Machine", correct: true },
            { text: "Java Voice Machine", correct: false },
        ]
    },
    {
        question: "Which access modifier is the most restrictive?",
        answers: [
            { text: "public", correct: false },
            { text: "protected", correct: false },
            { text: "private", correct: true },
            { text: "default", correct: false },
        ]
    },
    {
        question: "Which data type can store the largest integer value?",
        answers: [
            { text: "long", correct: true },
            { text: "int", correct: false },
            { text: "short", correct: false },
            { text: "byte", correct: false },
        ]
    },
    {
        question: "What is the superclass of all classes in Java?",
        answers: [
            { text: "Parent", correct: false },
            { text: "Root", correct: false },
            { text: "Class", correct: false },
            { text: "Object", correct: true },
        ]
    },
    {
        question: "How do you create an object of a class in Java?",
        answers: [
            { text: "using the 'object' keyword", correct: false },
            { text: "using the 'new' keyword", correct: true },
            { text: "using the 'create' keyword", correct: false },
            { text: "using the 'instanceof' keyword", correct: false },
        ]
    },
    {
        question: "Which of the following is an example of a primitive data type?",
        answers: [
            { text: "String", correct: false },
            { text: "Array", correct: false },
            { text: "int", correct: true },
            { text: "Class", correct: false },
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-button");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ". "+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.addEventListener("click",selectAnswer);
        }
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }

    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }

        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score}  out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestion<questions.length){
        showQuestion();
    }

    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }

    else{
        startQuiz();
    }
});


startQuiz();
