// Creating Question Objects.

function Question(question,choices,answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
}

// QUestion prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer == answer;
}

let question1 = new Question(
    "What is the best sport ?",
    ["basketball","soccer","tennis"],
    "basketball"
    )

console.log(question1.checkAnswer('basketball'))