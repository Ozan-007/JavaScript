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
        console.log("Wrong.");
      }
      else{
        console.log("Correct!!");
        this.score++;
    }
    this.questionIndex++;
        
}

let quiz = new Quiz(questions);

quiz.getQuestion();
// quiz.guess("Basketball")

// console.log(quiz.score)
// console.log(quiz.questionIndex);
// quiz.getQuestion();
// quiz.guess("ankara")
// console.log(quiz.isFinished())
// console.log(quiz.score)

// console.log(quiz.isFinished());

// Start Quiz

document.getElementById('question').innerHTML = quiz.getQuestion().question

for (let index = 0; index < quiz.getQuestion().choices.length; index++) {
  document.getElementById(`choice${index}`).innerHTML = quiz.getQuestion().choices[index];  
}


