var mainEl = document.querySelector('#main');
var timeEl = document.querySelector('#countdown');
var timeLeft = 75;
var totalScore = 0;
var startPage = document.querySelector('.start-page');
var startQuiz = document.querySelector('#start-quiz');



var score = function () {
    totalScore = totalScore + 10;
}

// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
var countdown = function () {
    var timeInterval = setInterval(function() {
  if (timeLeft >= 1) {
      timeEl.textContent = timeLeft; 
      timeLeft--; 
      return timeLeft;
  } else {
    // Once `timeLeft` gets to 0, set `timeEl` to an empty string
    timeEl.textContent = '';
    // Use `clearInterval()` to stop the timer
    clearInterval(timeInterval);
    window.alert('Quiz is over!')
    question.remove();
    
  }
}, 1000);

}


//High Score Page
var highScores = function() {
    
    var highScoreDiv = document.createElement('div');
    highScoreDiv.className = 'high-score-div';
    mainEl.appendChild(highScoreDiv);

    var highScoreTitle = document.createElement('h1');
    highScoreTitle.className = 'high-score-title';
    highScoreTitle.textContent = 'High scores';
    highScoreDiv.appendChild(highScoreTitle);

//To Display High Scores 
    var initials = localStorage.getItem('initials');
    var score = localStorage.getItem('score');
    var addHighScore = document.createElement('p');
    addHighScore.className = 'add-high-score';
    addHighScore.textContent = '1. ' + initials + ' - ' + score;
    highScoreDiv.appendChild(addHighScore);

    var highScoresList = document.createElement('div');
    highScoresList.className = 'high-score-list';
    highScoreDiv.appendChild(highScoresList);

    var goBack = document.createElement('button');
    goBack.className = 'go-back-button';
    goBack.textContent = 'Go back';
    goBack.addEventListener('click', function () {
    totalScore= 0;
    timeLeft = 75; 
    highScoreDiv.remove();
    start();
    })
    highScoresList.appendChild(goBack);

    var clearHighScores = document.createElement('button');
    clearHighScores.className = 'clear-high-scores-button';
    clearHighScores.textContent = 'Clear high scores';
    clearHighScores.addEventListener('click', function () {
    localStorage.removeItem('initials')
    localStorage.removeItem('score')
    highScoresList.remove();
    addHighScore.remove();
    })
    highScoresList.appendChild(clearHighScores);
}

    var enterScore = function () {
    
    var doneDiv = document.createElement('div');
    doneDiv.className = 'done-div';
    mainEl.appendChild(doneDiv);

    var done = document.createElement('h1');
    done.textContent = 'All done!';
    done.className = 'done-title';
    doneDiv.appendChild(done);
 
    var score = document.createElement('h5');
    score.textContent = 'Your final score is ' + totalScore;
    score.className = 'score';
    doneDiv.appendChild(score);

    var inputDiv = document.createElement('div');
    inputDiv.className = 'input-div';
    doneDiv.appendChild(inputDiv);

    var label = document.createElement('label');
    label.textContent = 'Enter initials:';
    label.className = 'label';
    label.setAttribute('for', 'input');
    inputDiv.appendChild(label);

    var enterInput = document.createElement('input');
    enterInput.className = 'score-input';
    enterInput.setAttribute('id', 'input');
    enterInput.setAttribute('type', 'text');
    enterInput.setAttribute('name', 'input');
    inputDiv.appendChild(enterInput);

    var submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.className = 'submit-button';
    submit.addEventListener('click', function () {
    
        var initials = document.getElementById('input').value;
        localStorage.setItem('initials', initials);
        localStorage.setItem('score', totalScore);
        doneDiv.remove();
        highScores();
    })
    inputDiv.appendChild(submit);

}

//Questions 
        var questionOne = function() {
//if answered incorrectly 
        var wrongAnswer = function() {
        timeLeft = timeLeft - 10; 
        questionDiv.remove();
        questionTwo();
      }
    
        var questionDiv = document.createElement('div');
        questionDiv.className = 'question-div';
        mainEl.appendChild(questionDiv);
    
    //Question One
        var question = document.createElement('h1');
        question.className = 'question';
        question.textContent = 'Commonly used data types do NOT include:';
        questionDiv.appendChild(question); 
    
    //Question One Answer Choices 
        var answerDiv = document.createElement('div');
        answerDiv.className = 'answer-div';
        questionDiv.appendChild(answerDiv);
      
    //Answer Choice One 
        var answerChoiceOne = document.createElement('button');
        answerChoiceOne.className = 'answer-choice-one';
        answerChoiceOne.textContent = '1. strings';
        answerDiv.appendChild(answerChoiceOne);
        answerChoiceOne.addEventListener('click', function () {
        wrongAnswer();
      })
    //Answer Choice Two 
        var answerChoiceTwo = document.createElement('button');
        answerChoiceTwo.className = 'answer-choice-two';
        answerChoiceTwo.textContent = '2. booleans';
        answerDiv.appendChild(answerChoiceTwo);
        answerChoiceTwo.addEventListener('click', function () {
        wrongAnswer();
      })
    //Answer Choice Three
        var answerChoiceThree = document.createElement('button');
        answerChoiceThree.className = 'answer-choice-three';
        answerChoiceThree.textContent = '3. alerts';
        answerDiv.appendChild(answerChoiceThree);
        answerChoiceThree.addEventListener('click', function () {
        questionDiv.remove();
        questionTwo();
        score ();
      })
    //Answer Choice Four
        var answerChoiceFour = document.createElement('button');
        answerChoiceFour.className = 'answer-choice-four';
        answerChoiceFour.textContent = '4. numbers';
        answerDiv.appendChild(answerChoiceFour);
        answerChoiceFour.addEventListener('click', function () {
        wrongAnswer();
      })
    }
    
        var questionTwo = function() {
    // if answered incorrectly 
        var wrongAnswer = function() {
        questionThree();
        questionDiv.remove();
        timeLeft = timeLeft - 10;
    }
    
        var questionDiv = document.createElement('div');
        questionDiv.className = 'question-div';
        mainEl.appendChild(questionDiv);
    
    // Question Two 
        var question = document.createElement('h1');
        question.className = 'question';
        question.textContent = 'The condition in an if / else statement is enclosed with ________.';
        questionDiv.appendChild(question);
    
    // Question Two Answer Choices 
        var answerDiv = document.createElement('div');
        answerDiv.className = 'answer-div';
        questionDiv.appendChild(answerDiv);
    
    //Answer Choice One
        var answerChoiceOne = document.createElement('button');
        answerChoiceOne.className = 'answer-choice-one';
        answerChoiceOne.textContent = '1. quotes';
        answerDiv.appendChild(answerChoiceOne);
        answerChoiceOne.addEventListener('click', function () {
        wrongAnswer();
    })
    //Answer Choice Two
        var answerChoiceTwo = document.createElement('button');
        answerChoiceTwo.className = 'answer-choice-two';
        answerChoiceTwo.textContent = '2. curly brackets';
        answerDiv.appendChild(answerChoiceTwo);
        answerChoiceTwo.addEventListener('click', function () {
        wrongAnswer();
    })
    //Answer Choice Three
        var answerChoiceThree = document.createElement('button');
        answerChoiceThree.className = 'answer-choice-three';
        answerChoiceThree.textContent = '3. parenthesis';
        answerDiv.appendChild(answerChoiceThree);
        answerChoiceThree.addEventListener('click', function () {
        questionDiv.remove();
        questionThree();
        score ();
    })
    //Answer Choice Four
        var answerChoiceFour = document.createElement('button');
        answerChoiceFour.className = 'answer-choice-four';
        answerChoiceFour.textContent = '4. square brackets';
        answerDiv.appendChild(answerChoiceFour);
        answerChoiceFour.addEventListener('click', function () {
        wrongAnswer();
    })
    }
    
        var questionThree = function() {
    // if answered incorrectly 
        var wrongAnswer = function() {
        timeLeft = timeLeft - 10;
        questionDiv.remove();
        questionFour();
          }
    
        var questionDiv = document.createElement('div');
        questionDiv.className = 'question-div';
        mainEl.appendChild(questionDiv);
      
    // Question Three 
        var question = document.createElement('h1');
        question.className = 'question';
        question.textContent = 'Arrays in JavaScript can be used to store _______.';
        questionDiv.appendChild(question);
      
    //Question Three Answers 
        var answerDiv = document.createElement('div');
        answerDiv.className = 'answer-div';
        questionDiv.appendChild(answerDiv);
    
    //Answer Choice One
        var answerChoiceOne = document.createElement('button');
        answerChoiceOne.className = 'answer-choice-one';
        answerChoiceOne.textContent = '1. numbers & strings';
        answerDiv.appendChild(answerChoiceOne);
        answerChoiceOne.addEventListener('click', function () {
        wrongAnswer();
          })
    //Answer Choice Two 
        var answerChoiceTwo = document.createElement('button');
        answerChoiceTwo.className = 'answer-choice-two';
        answerChoiceTwo.textContent = '2. other arrays';
        answerDiv.appendChild(answerChoiceTwo);
        answerChoiceTwo.addEventListener('click', function () {
        wrongAnswer();
          })
    
    //Answer Choice Three 
        var answerChoiceThree = document.createElement('button');
        answerChoiceThree.className = 'answer-choice-three';
        answerChoiceThree.textContent = '3. booleans';
        answerDiv.appendChild(answerChoiceThree);
        answerChoiceThree.addEventListener('click', function () {
        wrongAnswer();
          })
    
    //Answer Choice Four 
        var answerChoiceFour = document.createElement('button');
        answerChoiceFour.className = 'answer-choice-four';
        answerChoiceFour.textContent = '4. all of the above';
        answerDiv.appendChild(answerChoiceFour);
        answerChoiceFour.addEventListener('click', function () {
        questionDiv.remove();
        questionFour();
        score ();
          })
      }
    
        var questionFour = function() {
    // if answered incorrectly
        var wrongAnswer = function() {
        timeLeft = timeLeft - 10;
        questionDiv.remove();
        questionFive();
        return timeLeft;
            }
    
        var questionDiv = document.createElement('div');
        questionDiv.className = 'question-div';
        mainEl.appendChild(questionDiv);
        
    // Question Four
        var question = document.createElement('h1');
        question.className = 'question';
        question.textContent = 'What does assigning a variable null do:';
        questionDiv.appendChild(question);
        
    // Question Four Answers
        var answerDiv = document.createElement('div');
        answerDiv.className = 'answer-div';
        questionDiv.appendChild(answerDiv);
        
    // Answer Choice One    
        var answerChoiceOne = document.createElement('button');
        answerChoiceOne.className = 'answer-choice-one';
        answerChoiceOne.textContent = '1. number';
        answerDiv.appendChild(answerChoiceOne);
        answerChoiceOne.addEventListener('click', function () {
        wrongAnswer();
            })
    // Answer Choice Two 
        var answerChoiceTwo = document.createElement('button');
        answerChoiceTwo.className = 'answer-choice-two';
        answerChoiceTwo.textContent = '2. string';
        answerDiv.appendChild(answerChoiceTwo);
        answerChoiceTwo.addEventListener('click', function () {
        wrongAnswer();
            })
    // Answer Choice Three 
        var answerChoiceThree = document.createElement('button');
        answerChoiceThree.className = 'answer-choice-three';
        answerChoiceThree.textContent = '3. undefined';
        answerDiv.appendChild(answerChoiceThree);
        answerChoiceThree.addEventListener('click', function () {
        wrongAnswer();
            })
    // Answer Choice Four 
        var answerChoiceFour = document.createElement('button');
        answerChoiceFour.className = 'answer-choice-four';
        answerChoiceFour.textContent = '4. nothing';
        answerDiv.appendChild(answerChoiceFour);
        answerChoiceFour.addEventListener('click', function () {
        questionDiv.remove();
        questionFive();
        score ();
            })
        }
    
        var questionFive = function() {
    // if answered incorrectly
        var wrongAnswer = function() {
        questionDiv.remove();
        enterScore();
          }
    
        var questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        mainEl.appendChild(questionDiv);
      
    // Question Five
        var question = document.createElement('h1');
        question.className = 'question';
        question.textContent = 'What is another word for case sensitive';
        questionDiv.appendChild(question);
      
    // Question Five Answers 
        var answerDiv = document.createElement('div');
        answerDiv.className = 'answer-div';
        questionDiv.appendChild(answerDiv);
          
    // Answer Choice One
        var answerChoiceOne = document.createElement('button');
        answerChoiceOne.className = 'answer-choice-one';
        answerChoiceOne.textContent = '1. CamelCasing';
        answerDiv.appendChild(answerChoiceOne);
        answerChoiceOne.addEventListener('click', function () {
        score ();
        questionDiv.remove();
          })
    //Answer Choice Two 
        var answerChoiceTwo = document.createElement('button');
        answerChoiceTwo.className = 'answer-choice-two';
        answerChoiceTwo.textContent = '2. Uppercase';
        answerDiv.appendChild(answerChoiceTwo);
        answerChoiceTwo.addEventListener('click', function () {
        wrongAnswer();
          })
    //Answer Choice Three
        var answerChoiceThree = document.createElement('button');
        answerChoiceThree.className = 'answer-choice-three';
        answerChoiceThree.textContent = '3. Case Sensitive';
        answerDiv.appendChild(answerChoiceThree);
        answerChoiceThree.addEventListener('click', function () {
        wrongAnswer();
          })
    //Answer Choice Four 
        var answerChoiceFour = document.createElement('button');
        answerChoiceFour.className = 'answer-choice-four';
        answerChoiceFour.textContent = '4. No Clue';
        answerDiv.appendChild(answerChoiceFour);
        answerChoiceFour.addEventListener('click', function () {
        wrongAnswer();
          })
      }


//Start Quiz
var start = function () {

    var startPage = document.querySelector('.start-page');
    var startQuiz = document.querySelector('#start-quiz');
    window.onload = function () {
    startQuiz.addEventListener('click', function() {
        countdown();
        questionOne();
        startQuiz.remove();
        startPage.remove();
        });
    }}


start();