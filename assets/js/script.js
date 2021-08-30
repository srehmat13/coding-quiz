// Homepage - To Begin Coding Quiz
var mainEl = document.querySelector('#main');
var timeEl = document.querySelector('#countdown');
var timeLeft = 75;
var totalScore = 0;
var quizOver = false;


var score = function () {
    totalScore = totalScore + 10;
}

// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
var timeInterval = setInterval(function() {
  // As long as the `timeLeft` is greater than 1
  if (timeLeft > 1) {
    // Set the `textContent` of `timeEl` to show the remaining seconds
    timeEl.textContent = timeLeft + ' seconds remaining';
    // Decrement `timeLeft` by 1
    timeLeft--;
  } else if (timeLeft === 1) {
    // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    timeEl.textContent = timeLeft + ' second remaining';
    timeLeft--;
  } else {
    // Once `timeLeft` gets to 0, set `timeEl` to an empty string
    timeEl.textContent = '';
    // Use `clearInterval()` to stop the timer
    clearInterval(timeInterval);
  }
}, 1000);




//Start Function
var start = function() {
    var container = document.createElement('div');
    mainEl.appendChild(container);
}

//Page Title
var h1El = document.createElement('h1');
h1El.textContent = 'Coding Quiz Challenge';
h1El.setAttribute('style', 'margin:auto; width:50%; text-align: center;');
mainEl.appendChild(h1El);

//Quiz Summary 
var quizDescripton = document.createElement('p');
quizDescripton.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that the incorrect answers will penalize your score/time by ten seconds!';
quizDescripton.setAttribute('style', 'margin:auto; width:50%; text-align: center;');
mainEl.appendChild(quizDescripton);

//Start Quiz Button
var startQuizbtn = document.createElement('button');
startQuizbtn.textContent = 'Start Quiz';
mainEl.appendChild(startQuiz);

startQuizbtn.addEventListener('click', event => () {
    countdown();
    startQuizbtn.remove();
    h1El.remove();
    quizDescripton.remove();
    questOne();
    }
    );

start();