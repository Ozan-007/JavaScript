// Creating Question Objects.

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

// QUestion prototype
Question.prototype.checkAnswer = function (answer) {
  return this.answer == answer;
};

let question1 = new Question(
  "What is the best sport ?",
  [ "soccer", "tennis","basketball","badmington"],
  "basketball"
);
let question2 = new Question(
  "Which city is the capital of Turkey ?",
  ["Istanbul", "Ankara", "Antalya","Izmir"],
  "Ankara"
);

let question3 = new Question(
  "What is the best programming language ?",
  ["JavaScript", "Python", "Java","C#"],
  "JavaScript"
);

// console.log(question1.checkAnswer("basketball"));

// Quiz Constructor
var questions = [question1, question2,question3];
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
    
    let question = this.getQuestion();
    if(question.checkAnswer(answer)){
      this.score++;
      console.log('true')
    }
    this.questionIndex++;

    }

let quiz = new Quiz(questions);

// Start 

function uploadQuestion() {
    if(quiz.isFinished()){
      showScore();
    }
    else{
      let question = quiz.getQuestion();
      let choices = question.choices;
      document.getElementById('question').textContent = question.text;
      
      for (let i = 0; i < choices.length; i++) {
        let choice = document.getElementById(`choice${i}`);
        choice.textContent = choices[i];
        
        guess('btn'+i,choices[i])

      }
 
      showProgress();
 
    }
}

function guess(id,guess) {
  btn = document.getElementById(id)
  btn.onclick = function(){
    quiz.guess(guess)
    uploadQuestion();
  }
}



function showScore() {
 
    let scoreCard = `<h2>Score: ${quiz.score}</h2>`    // return quiz.score;
    document.querySelector('.card-body').innerHTML = scoreCard

}

uploadQuestion();

function showProgress() {
  let questionTotal = quiz.questions.length;
  let questionNumber = quiz.questionIndex+1;
  if (questionNumber <= 3) {
    document.getElementById('progress').innerHTML = `Question ${questionNumber} of ${questionTotal}`;
  }
}