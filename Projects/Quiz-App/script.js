// Creating Question Objects.

function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}

// QUestion prototype
Question.prototype.checkAnswer = function (answer) {
  return this.answer == answer;
};

let question1 = new Question(
  "What is the best sport ?",
  ["basketball", "soccer", "tennis"],
  "basketball"
);
let question2 = new Question(
  "Which city is the capital of Turkey ?",
  ["Ankara", "Istanbul", "Antalya"],
  "Ankara"
);

// console.log(question1.checkAnswer("basketball"));

// Quiz Constructor

let questions = [question1, question2];
function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
  return (this.questions[this.questionIndex]);
};

Quiz.prototype.isFinished = function () {
    return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function(answer){
    if (this.questions[this.questionIndex].answer.toLowerCase != answer.toLowerCase) {
        return false
      }
      else{
        this.score++;
        return true
    }
    this.questionIndex++;
        
}

let quiz = new Quiz(questions);

quiz.getQuestion();

// Start Quiz

function askQuestion() {
    let questionTitle  =  document.getElementById('question')
    questionTitle.innerHTML = questions[0]['question']

    for (let i = 0; i < questions[0]['choices'].length; i++) {
       choice = document.getElementById(`choice${i}`)
       choice.innerHTML = questions[0]['choices'][i]
      
    }
    
    makeGuess('choice0')
    

    }

function makeGuess(id) {
  
  selection =  document.getElementById(id)
  selection.onclick = function(){

    console.log(quiz.guess(selection.innerHTML))
  
  }
  
  }  


askQuestion();












