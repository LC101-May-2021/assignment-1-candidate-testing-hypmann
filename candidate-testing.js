const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
  // let candidateName;
  //let question;
  //let correctAnswer;
  //let candidateAnswer;
  //let questions;
  //let correctAnswers;
  //let candidateAnswers;
  //let gradeQuiz;
 //let runProgram;
//let quiz.runProgram;

// TODO 1.1a: Define:
let candidateName = " ";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

  //Questions Section.
let question = "Who was the first American woman in space? ";




//Answer Section.
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";

//let gradeQuiz;
//let runProgram;

//function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("What is your name: ");
 console.log("candidateName: " + candidateName);
 

   //TODO 1.1c: Greet User
   console.log("Welcome: " + candidateName);
 

//function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

 if (question && candidateAnswer) {
  console.log(question + candidateAnswer);
  candidateAnswer = input.question("Your answer: ");
 } 


//function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

if (correctAnswer === candidateAnswer) {
  console.log("You have answered the question correctly.");
} else {
  console.log("Your answer is incorrect. Correct Answer is: ");
  candidateAnswer = "Sally Ride"
  console.log(candidateAnswer);
}


  //let grade = 100%;
 

  //return grade = 100;
 
 
//{
//function runProgram() {
  //askForName();
  // TODO 1.1c: Ask for candidate's name //
 
  //askQuestion();
  //gradeQuiz(this.candidateAnswers);
//}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
//module.exports = {
  //candidateName: candidateName,
  //question: question,
  //correctAnswer: correctAnswer,
  //candidateAnswer: candidateAnswer,
  //questions: questions,
  //correctAnswers: correctAnswers,
  //candidateAnswers: candidateAnswers,
  //gradeQuiz: gradeQuiz,
 // runProgram: runProgram
//};