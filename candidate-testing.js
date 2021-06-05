const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
 
// TODO 1.1a: Define:
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride"; 
let candidateAnswer = "";
let questions =  [ "\n1) Who was the first American woman in space? ", "\n2) True or false: 5 kilometer == 5000 meters? ", "\n3) (5 + 3) / 2 * 10 = ? ", "\n4) Given the array [8, 'Orbit', 'Trajectory', 45, what entry is at index 2] ", "\n5) What is the minimum crew size for the ISS " ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let totalCorrectAnswers = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("What is Your Name: ");

 console.log("candidateName: " + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    
  for (let i = 0; i < questions.length; i++) {
    //console.log(i);  
    candidateAnswers.push(input.question(questions[i]));
  
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      console.log(`Correct: ${candidateAnswers[i]}`);
      console.log(`Correct answer is: ${correctAnswers[i]}`);
      totalCorrectAnswers +=1;
    } else {
      console.log(`Not correct: ${candidateAnswers[i]}`);
      console.log(`Correct answer is: ${correctAnswers[i]}`);
    }
  }
  return totalCorrectAnswers;
  
}
function gradeQuiz(candidateAnswers) {

  //TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

//     if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
//       console.log(`Your answer is correct ${candidateAnswers[i]}`);
//       console.log(`The correct answer is: ${correctAnswers[i]}`);
//       totalCorrectAnswers +=1;
//     } else {
//       console.log(`Your answer is not correct`);
//       console.log(`The correct answer is: ${correctAnswers[i]}`);
//     }
//   

//   return totalCorrectAnswers;
// 

   let grade = (totalCorrectAnswers / 5) * 100;
   console.log(grade);
  
   function myCompleteGrade() {
     if (grade >= 80) {
      console.log(`>>> Overall Grade: ${grade}% (${totalCorrectAnswers} of ${questions.length} responses correct) <<<`);
      console.log();
      console.log(">>> Status: Passed <<<");

     } else {
     console.log(`>>> Overall Grade: ${grade}% (${totalCorrectAnswers} of ${questions.length} responses correct) <<<`);
     console.log(">>> Status: Failed <<<");
    }
}
myCompleteGrade();
   return grade;
}
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
   console.log("Welcome: " + candidateName);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

//Don't write any code below this line //
//And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
 runProgram: runProgram
};