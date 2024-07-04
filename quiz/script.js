const questions = [
    {
        question: "which country is considered the birth place of cricket?",
        answers: [
            { text: "India", correct: false},
            { text: "England", correct: true},
            { text: "South Africa", correct: false},
            { text: "Australia", correct: false},

            
        ]
    },
    {
        question: "What is the nickname of the India Women's national cricket team?",
        answers: [
            { text: "women in Yellow", correct: false},
            { text: "women in White", correct: false},
            { text: "women in Red", correct: false},
            { text: "women in Blue", correct: true},

            
        ]
    },
    {
        question: "How many times has India won the Women's Asia Cup?",
        answers: [
            { text: "7", correct: true},
            { text: "5", correct: false},
            { text: "6", correct: false},
            { text: "4", correct: false},

            
        ]
    },
    {
        question: "How many times has India won the Cricket world Cup?",
        answers: [
            { text: "Two", correct: true},
            { text: "One", correct: false},
            { text: "three", correct: false},
            { text: "Four", correct: false},

            
        ]
    
    },
    {
        question: "which indian cricketer is also known as the Run machine?",
        answers: [
            { text: "Rohit", correct: false},
            { text: "Virat", correct: true},
            { text: "Sachin", correct: false},
            { text: "kapil Dev", correct: false},

            
        ]
    },
    {
        question: "what is the nickname of Rohit Sharma?",
        answers: [
            { text: "Chiku", correct: false},
            { text: "Raj", correct: false},
            { text: "Hitman", correct: true},
            { text: "Hitler", correct: false},

            
        ]
    },
    {
        question: "which is city is known as the 'Mecca' of India cicket?",
        answers: [
            { text: "Mumbai", correct: false},
            { text: "Kolkata", correct: true},
            { text: "Chennai", correct: false},
            { text: "Delhi", correct: false},

            
        ]
    },
    {
        question: "In cricket, what does LBW stand for?",
        answers: [
            { text: "Leg Before Wicket", correct: true},
            { text: "Left Batsman Wrong", correct: false},
            { text: "Leg Ball Wasted", correct: false},
            { text: "Lost Bat Winner", correct: false},

            
        ]
    },
    
    {
        question: "what is the best record in ODI made by Rohit Sharma?",
        answers: [
            { text: "267", correct: false},
            { text: "264", correct: true},
            { text: "265", correct: false  },
            { text: "263", correct: false},

            
        ]
    },
    {
        question: "who is the current captain of the Indian National Men's Cricket Team?",
        answers: [
            { text: "virat", correct: false},
            { text: "Hardik", correct: false},
            { text: "Rohit", correct: true},
            { text: "Rahul", correct: false},

            
        ]
    },
    {
        question: "How many teams currently participate in the IPL?",
        answers: [
            { text: "10", correct: true},
            { text: "9", correct: false},
            { text: "8", correct: false},
            { text: "12", correct: false},

            
        ]
    },
    {
        question: "The IPL is organised by which governing body?",
        answers: [
            { text: "ICC", correct: false},
            { text: "ACC", correct: false},
            { text: "ECB", correct: false},
            { text: "BCCI", correct: true},

            
        ]
    },
    {
        question: "Which country has won the most  Cricket World Cups?",
        answers: [
            { text: "Australia", correct: true},
            { text: "India", correct: false},
            { text: "West Indies", correct: false},
            { text: "England", correct: false},

            
        ]
    },
    {
        question: "In Which year was the first Cricket World Cup held?",
        answers: [
            { text: "1967", correct: false},
            { text: "1975", correct: true},
            { text: "1983", correct: false},
            { text: "1992", correct: false},

            
        ]
    },
    {
        question: "Who captained India to victory in the 1983 Cricket World Cup?",
        answers: [
            { text: "Sunil Gavaskar", correct: false},
            { text: "Ravi Shastri", correct: false},
            { text: "Gautam Gambir", correct: false},
            { text: "Kapil Dev", correct: true},

            
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");
let currentQuestionIndex  = 0;
let score = 0;

function startQuiz(){
    let currentQuestionIndex = 0;
   let score = 0;
    nextButton.innerHTML = "Next";
    ShowQuestion();
}
function ShowQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
 function  handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            ShowQuestion();
        }else{
            showScore();
        }
        
    }
 nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    })
startQuiz();



