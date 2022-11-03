$(document).ready(function () {    
    const json = {
        "questions" : [
            {
                "question": "Das ist eine sehr lange Frage, die gefühlt niemals endet. Unter diesen Bedingungen sollte die Frage sich über mehrere Zeilen erstrecken und viel Platz einnehmen. Damit wird getestet wie sich die Zeilenumbrüche auf das Format auswirken. Und jetzt zur Lösung dieser Frage: es könnte sein, dass Antwort 1 Stimmt - das kann aber nur möglich sein, wenn alle anderen Antworten Falsch sind. Aber glaube mir... es ist Antwort 1. Vertraust du mir?",
                "right_answers": [
                    "Das ist eine mittellange Antwort (falsche)"
                ],
                "wrong_answers": [
                    "richtig", 
                    "Eine ewig lange falsche Antwort, ohne wirklich viel Inhalt - so wie Seppls Schädel", 
                    "falsch", 
                ]
            },
            {
                "question": "2te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "3te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "4te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "5te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "6te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "7te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "8te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "9te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "10te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "11te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "12te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "13te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            },
            {
                "question": "14te Frage?",
                "right_answers": [
                    "1te richtige Antwort"
                ],
                "wrong_answers": [
                    "1te falsche Antwort", 
                    "2te falsche Antwort", 
                    "3te falsche Antwort", 
                ]
            }
        ]
    }
    const questions = shuffle(json.questions.slice());

    var index = 0;
    var currentRightAnswer = 0;
    var rightAnswers = 0;
    
    const startButton = $('#start-quiz-button');
    const answer1Button = $('#answer1-button');
    const answer2Button = $('#answer2-button');
    const answer3Button = $('#answer3-button');
    const answer4Button = $('#answer4-button');
    const saveButton = $('#save-button');
    const loadButton = $('#load-button');
    
    const progressBar = $("#progressbar-quiz");

    const answerButtonsSection = $('#answer-buttons');

    const questionLabel = $('#question');

    answerButtonsSection.hide();
    $('#body').css('visibility', 'visible');
    
    startButton.click(startQuiz);
    answer1Button.click(() => { if(currentRightAnswer == 0) { rightAnswers++; } answerClick(); });
    answer2Button.click(() => { if(currentRightAnswer == 1) { rightAnswers++; } answerClick(); });
    answer3Button.click(() => { if(currentRightAnswer == 2) { rightAnswers++; } answerClick(); });
    answer4Button.click(() => { if(currentRightAnswer == 3) { rightAnswers++; } answerClick(); });
    
    function startQuiz() {
        answerButtonsSection.show('slow');
        startButton.hide();

        updateAnswers();
        console.log(currentRightAnswer);
    }

    function answerClick() {
        updateAnswers();
        updateProgress();
        console.log("current score: " + rightAnswers);
        console.log("next right answer: " + currentRightAnswer);
    }

    function updateProgress() {
        var percent = (index - 1) * 10;
        progressBar.css('width', percent + "%");
        progressBar.html(percent + "%");
    }

    function updateAnswers() {
        var currQuestion = questions[index];
        var answers = shuffle($.merge(currQuestion.right_answers, currQuestion.wrong_answers).slice());
        for (i = 0; i < answers.length; i++) {
            if(answers[i] === currQuestion.right_answers[0]) {
                currentRightAnswer = i;
                break;
            }
        }
        index++;

        questionLabel.html(currQuestion.question);
        answer1Button.html(answers[0]);
        answer2Button.html(answers[1]);
        answer3Button.html(answers[2]);
        answer4Button.html(answers[3]);
    }






    
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
});
