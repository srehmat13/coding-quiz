// Homepage - To Begin Coding Quiz
var body = document.body;


//Page Title
var h2El = document.createElement('h2');
h2El.textContent = 'Coding Quiz Challenge';
h2El.setAttribute('style', 'margin:auto; width:50%; text-align: center;');
body.appendChild(h2El);

//Quiz Summary 
var quizDescripton = document.createElement('p');
quizDescripton.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that the incorrect answers will penalize your score/time by ten seconds!';
quizDescripton.setAttribute('style', 'margin:auto; width:50%; text-align: center;');
body.appendChild(quizDescripton);

//Start Quiz Button
var startQuizbtn = document.createElement('button');
startQuizbtn.textContent = 'Start Quiz';
body.appendChild(startQuiz);

startQuizbtn.addEventListener('click', function () {
    countdown();
    }
    );

