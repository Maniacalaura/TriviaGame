var quizQuestions =[
    // q1("What was the name of the treehouse in Adventureland, before it became Tarzan's Treehouse?"
    // ["The Jungle Book Treehouse", "Swiss Family Treehouse", "Robin Hood's Treehouse", "Mickey's Treehouse"],1),
    // q2("In what year did the Indiana Jones ride open?"
    // ["1984", "1989", "1991", "1995"],3),
    // q3("Where is the only place in the park you can legally purchase and consume alcohol?"
    // ["The Cove Bar", "UVA Bar", "Club 33", "The Blue Bayou"],2),
    // q4("The Matterhorn attraction is one of the most popular rides at the park but also contains a secret hiding within its walls. What is in the mountain?"
    // ["A Secret Hotel Suite", "Old Ride Parts", "A Basketball Court", "An Arcade"],2),
    // q5("Which of the following rides changes every year from Halloween to Christmas?"
    // ["It's a Small World", "The Matterhorn", "Big Thunder Railroad", "The Haunted Mansion"],3),
    // q6("Which US President was present on Opening Day in 1955?"
    // ["Dwight D. Eisenhower", "Lyndon B. Johnson", "Ronald Reagan", "Bill Clinton"],2),
    // q7("What is the tallest structure in Disneyland?"
    // ["Space Mountain", "Splash Mountain", "The Matterhorn", "Sleeping Beauty's Castle"],0),
    // q8("This now abandoned Tomorrowland Attaction, formerly the People Mover, was re-engineerd into this ill-fated, short-lived ride:"
    // ["Flying Saucers", "Rocket Rods", "Circarama U.S.A", "Mission to Mars"],1)
];

// var q1 = ["The Jungle Book Treehouse", "Swiss Family Treehouse", "Robin Hood's Treehouse", "Mickey's Treehouse"];
// var q2 = ["1984", "1989", "1991", "1995"]
// var q3 = ["The Cove Bar", "UVA Bar", "Club 33", "The Blue Bayou"];
// var q4 = ["A Secret Hotel Suite", "Old Ride Parts", "A Basketball Court", "An Arcade"];
// var q5 = ["It's a Small World", "The Matterhorn", "Big Thunder Railroad", "The Haunted Mansion"];
// var q6 = ["Dwight D. Eisenhower", "Lyndon B. Johnson", "Ronald Reagan", "Bill Clinton"];
// var q7 = ["Space Mountain", "Splash Mountain", "The Matterhorn", "Sleeping Beauty's Castle"];
// var q8 = ["Flying Saucers", "Rocket Rods", "Circarama U.S.A", "Mission to Mars"];

// var myQuestions = [ {
//     q1: "What was the name of the treehouse in Adventureland, before it became Tarzan's Treehouse?",
//     answers: ["The Jungle Book Treehouse", "Swiss Family Treehouse", "Robin Hood's Treehouse", "Mickey's Treehouse"],
//     correctAnswer: "Swiss Family Treehouse"
// }
    
// ];

// function buildQuiz(){
    
//     var output = [];
    
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {
    
//         var answers = [];
  
//         for(var letter in currentQuestion.answers){
  
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }

//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join('')} </div>`
//         );
//       }
//     );
  
//     q1.innerHTML = output.join('');
//   }
//   myQuestions.forEach( (currentQuestion, questionNumber) => {
  
// });


// function showResults(){

//     // gather answer containers from our quiz
//     var answerContainers = q1.querySelectorAll('.answers');

//     // keep track of user's answers
//     let numCorrect = 0;

//     // for each question...
//     myQuestions.forEach( (currentQuestion, questionNumber) => {

//     // find selected answer
//         var answerContainer = answerContainers[questionNumber];
//         var selector = 'input[name=question'+questionNumber+']:checked';
//         var userAnswer = (answerContainer.querySelector(selector) || {}).value;

//     // if answer is correct
//             if(userAnswer===currentQuestion.correctAnswer){
//             // add to the number of correct answers
//             numCorrect++;

//     // color the answers green
//             answerContainers[questionNumber].style.color = 'lightgreen';
//     }
//     // if answer is wrong or blank
//             else{
//     // color the answers red
//             answerContainers[questionNumber].style.color = 'red';
//     }
// });

// // show number of correct answers out of total
// resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
// }
// var answerContainers = q1.querySelectorAll('.answers');

// // keep track of user's answers
// let numCorrect = 0;

// myQuestions.forEach( (currentQuestion, questionNumber) => {

//     // find selected answer
//     var answerContainer = answerContainers[questionNumber];
//     var selector = `input[name=question${questionNumber}]:checked`;
//     var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//     // if answer is correct
//     if(userAnswer===currentQuestion.correctAnswer){
//       // add to the number of correct answers
//       numCorrect++;
  
//     }
//   });

// buildQuiz();


// submitButton.addEventListener('click', showResults);


function submitAnswers(){

    var total = 8;
    var score = 0;
    
    var q1 = document.forms["qForm"]["q1"].value
    var q2 = document.forms["qForm"]["q2"].value
    var q3 = document.forms["qForm"]["q3"].value
    var q4 = document.forms["qForm"]["q4"].value
    var q5 = document.forms["qForm"]["q5"].value
    var q6 = document.forms["qForm"]["q6"].value
    var q7 = document.forms["qForm"]["q7"].value
    var q8 = document.forms["qForm"]["q8"].value

    var correctAnswers = ["b", "d", "c" ,"c", "d", "c", "a", "b"];
    console.log(correctAnswers);

    if(q1 == correctAnswers[0]){
        score++;
    }
    if(q2 == correctAnswers[1]){
        score++;
    }
    if(q3 == correctAnswers[2]){
        score++;
    }
    if(q4 == correctAnswers[3]){
        score++;
    }
    if(q5 == correctAnswers[4]){
        score++;
    }
    if(q6 == correctAnswers[5]){
        score++;
    }
    if(q7 == correctAnswers[6]){
        score++;
    }
    if(q8 == correctAnswers[7]){
        score++;
    }
    
    var results = document.getElementById("results");
    results.innerHTML = 'You scored ' +score+ ' out of ' +total ;

    return false;
}
