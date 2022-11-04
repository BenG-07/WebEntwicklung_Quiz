$(document).ready(function () {    
    const questionsForQuiz = 10;
    const json = {
        "questions" : [
            {
                "question": "Was ist 5+4?",
                "right_answers": [
                    "9"
                ],
                "wrong_answers": [
                    "13", 
                    "1", 
                    "null"
                ]
            },
            {
                "question": "Wie viele Monde hat Jupiter?",
                "right_answers": [
                    "79"
                ],
                "wrong_answers": [
                    "13", 
                    "1", 
                    "34"
                ]
            },
            {
                "question": "Was ergibt \"'b'+'a'+ +'a'+'a'\" in javascript?",
                "right_answers": [
                    "baNaNa"
                ],
                "wrong_answers": [
                    "baNANa", 
                    "Es wirft einen Fehler", 
                    "Es wird ignoriert"
                ]
            },
            {
                "question": "Wann hat der zweite Weltkrieg begonnen?",
                "right_answers": [
                    "1939"
                ],
                "wrong_answers": [
                    "1918", 
                    "1928", 
                    "1940"
                ]
            },
            {
                "question": "Wie alt wurde Einstein?",
                "right_answers": [
                    "76"
                ],
                "wrong_answers": [
                    "86", 
                    "66", 
                    "69"
                ]
            },
            {
                "question": "Wie viele Kanten hat ein Würfel?",
                "right_answers": [
                    "12"
                ],
                "wrong_answers": [
                    "6", 
                    "8", 
                    "12"
                ]
            },
            {
                "question": "Was ist die richtige Schreibweise?",
                "right_answers": [
                    "Portemonnaie"
                ],
                "wrong_answers": [
                    "Portmonne", 
                    "Portmonnae", 
                    "Portmonnee"
                ]
            },
            {
                "question": "Was ist die Aufgabe der Milz?",
                "right_answers": [
                    "Filtert das Blut"
                ],
                "wrong_answers": [
                    "Wandelt Nährstoffe in für den Körper brauchbare Stoffe um", 
                    "Regelt die Flüssigkeitshaushalte", 
                    "Produktion und Freisetzung der beiden Hormone T3 und T4"
                ]
            },
            {
                "question": "Was ist die Aufgabe der Schilddrüse?",
                "right_answers": [
                    "Produktion und Freisetzung der beiden Hormone T3 und T4"
                ],
                "wrong_answers": [
                    "Filtert das Blut", 
                    "Wandelt Nährstoffe in für den Körper brauchbare Stoffe um", 
                    "Rudimentäres Organ"
                ]
            },
            {
                "question": "Was ist die Aufgabe der Leber?",
                "right_answers": [
                    "Wandelt Nährstoffe in für den Körper brauchbare Stoffe um"
                ],
                "wrong_answers": [
                    "Filtert das Blut", 
                    "Produktion und Freisetzung der beiden Hormone T3 und T4", 
                    "Lediglich da um Krebs zu bekommen"
                ]
            },
            {
                "question": "Wer hat das AOE2:DE Turnier \"Red Bull Wololo: Legacy 2022\" gewonnen?",
                "right_answers": [
                    "TaToH"
                ],
                "wrong_answers": [
                    "Liereyy", 
                    "MbL", 
                    "TheViper"
                ]
            },
            {
                "question": "Was ist der kleinste Bezirk in Wien?",
                "right_answers": [
                    "Josefstadt"
                ],
                "wrong_answers": [
                    "Innenstadt", 
                    "Doanustadt", 
                    "Neubau"
                ]
            },
            {
                "question": "Wie viele Kilometer ist ein AE?",
                "right_answers": [
                    "149.597.870"
                ],
                "wrong_answers": [
                    "314.159.265", 
                    "359.884.159", 
                    "194.179.003"
                ]
            },
            {
                "question": "Was ist das schnellste Tier der Welt?",
                "right_answers": [
                    "Gepard"
                ],
                "wrong_answers": [
                    "Leopard", 
                    "Panther", 
                    "Maus"
                ]
            },
            {
                "question": "Wer war Hirohito?",
                "right_answers": [
                    "Japanisches Staatsoberhaupt (1926-1989)"
                ],
                "wrong_answers": [
                    "Japanischer Wissenschaftler (1820-1889)", 
                    "Koreanischer Schriftsteller (1699-1760)", 
                    "Koreanischer Sportler (1970-2021)"
                ]
            },
            {
                "question": "Wann wurde das Spiel CS:GO veröffentlicht?",
                "right_answers": [
                    "21.August 2012"
                ],
                "wrong_answers": [
                    "20.August 2012", 
                    "19.August 2012", 
                    "18.August 2012"
                ]
            },
            {
                "question": "Wer hat Penicilin entdeckt?",
                "right_answers": [
                    "Alexander Fleming"
                ],
                "wrong_answers": [
                    "Albert Einstein", 
                    "Günther van Vliet", 
                    "Sigmund Freud"
                ]
            },
            {
                "question": "Wie viele Zähne hat ein erwachsener Mensch?",
                "right_answers": [
                    "32"
                ],
                "wrong_answers": [
                    "30", 
                    "28", 
                    "29"
                ]
            },
            {
                "question": "Was war technisch gesehen die schnellste Dampflok?",
                "right_answers": [
                    "Blauer Peter"
                ],
                "wrong_answers": [
                    "Roter Andi", 
                    "Grüner Bert", 
                    "Mallard"
                ]
            },
            {
                "question": "Wie lang war das Rohr vom schweren Gustav?",
                "right_answers": [
                    "32 m"
                ],
                "wrong_answers": [
                    "80 cm", 
                    "4 m", 
                    "12 mm"
                ]
            }
        ]
    }
    var questionInfo;
    var questions;
    var answers;
    var rightAnswers;
    var givenAnswers;
    var index;
    
    const startButton = $('#start-quiz-button');
    const answer1Button = $('#answer1-button');
    const answer2Button = $('#answer2-button');
    const answer3Button = $('#answer3-button');
    const answer4Button = $('#answer4-button');
    const previousButton = $('#previous-button');
    const endButton = $('#end-button');
    const nextButton = $('#next-button');
    const saveButton = $('#save-button');
    const loadButton = $('#load-button');
    const restartButton = $('#restart-button');
    
    const progressBar = $("#progressbar-quiz");

    const quizOverviewSection = $('#quiz-overview');
    const answerButtonsSection = $('#answer-buttons');

    const questionLabel = $('#question');

    init();
    answerButtonsSection.hide();
    $('#body').css('visibility', 'visible');
    
    startButton.click(startQuiz);
    previousButton.click(() => { index = index - 2; if (index < 0) { index = 0; } answerClick(); });
    nextButton.click(() => { answerClick(); });
    endButton.click();
    answer1Button.click(() => { givenAnswers[index - 1] = 0; answerClick(); });
    answer2Button.click(() => { givenAnswers[index - 1] = 1; answerClick(); });
    answer3Button.click(() => { givenAnswers[index - 1] = 2; answerClick(); });
    answer4Button.click(() => { givenAnswers[index - 1] = 3; answerClick(); });
    restartButton.click(() => { init(); answerClick(); });
    endButton.click(() => { calculateResult(); });
    saveButton.click(() => { saveQuiz(); });
    loadButton.click(() => { loadQuiz(); });
    
    function init() {
        endButton.hide();
        quizOverviewSection.show();
        answerButtonsSection.show();
        previousButton.show();
        nextButton.show();
        saveButton.show();
        loadButton.show();

        questionInfo = shuffle(json.questions).slice(questionsForQuiz);
        questions = new Array(questionsForQuiz);
        answers = new Array(questionsForQuiz);
        rightAnswers = new Array(questionsForQuiz);
        givenAnswers = new Array(questionsForQuiz);
    
        for (var i = 0; i < questionInfo.length; i++) {
            questions[i] = questionInfo[i].question;
            var tempAnswers = shuffle($.merge(questionInfo[i].right_answers.slice(), questionInfo[i].wrong_answers.slice()).slice());
            answers[i] = new Array(4);
            for (var j = 0; j < 4; j++) {
                answers[i][j] = tempAnswers[j];
                if (answers[i][j] === questionInfo[i].right_answers[0]) {
                    rightAnswers[i] = j;
                }
            }
        }
    
        index = 0;
    }

    function startQuiz() {
        startButton.hide();
        answerButtonsSection.show('slow');
        updateAnswers();
    }

    function answerClick() {
        updateAnswers();
    }

    function updateProgress(percent) {
        progressBar.css('width', percent + "%");
        progressBar.html(percent + "%");
        if (percent == 100) {
            endButton.show();
        }
    }

    function updateAnswers() {
        updateProgress(answeredQuestionsCount() * (100 / questionsForQuiz));

        if (index > 9) {
            index = 9;
        }

        questionLabel.html("Frage " + (index + 1) + "/" + questionsForQuiz + "<br>" + questions[index]);
        answer1Button.html(answers[index][0]);
        answer2Button.html(answers[index][1]);
        answer3Button.html(answers[index][2]);
        answer4Button.html(answers[index][3]);

        index++;
        toggleButtons(index - 1);
    }

    function answeredQuestionsCount() {
        var temp = 0;
        for (var i = 0; i < givenAnswers.length; i++) {
            if (givenAnswers[i] != null && !isNaN(givenAnswers[i])) {
                temp++;
            }
        }

        return temp;
    }

    function toggleButtons(idx) {
        answer1Button.removeClass("btn-outline-success");
        answer2Button.removeClass("btn-outline-danger");
        answer3Button.removeClass("btn-outline-warning");
        answer4Button.removeClass("btn-outline-info");
        answer1Button.removeClass("btn-success");
        answer2Button.removeClass("btn-danger");
        answer3Button.removeClass("btn-warning");
        answer4Button.removeClass("btn-info");
        switch (givenAnswers[idx]) {
            case 0:
                answer2Button.addClass("btn-outline-danger");
                answer3Button.addClass("btn-outline-warning");
                answer4Button.addClass("btn-outline-info");
                answer1Button.addClass("btn-success");
            break;
            case 1:
                answer1Button.addClass("btn-outline-success");
                answer3Button.addClass("btn-outline-warning");
                answer4Button.addClass("btn-outline-info");
                answer2Button.addClass("btn-danger");
            break;
            case 2:
                answer1Button.addClass("btn-outline-success");
                answer2Button.addClass("btn-outline-danger");
                answer4Button.addClass("btn-outline-info");
                answer3Button.addClass("btn-warning");
            break;
            case 3:
                answer1Button.addClass("btn-outline-success");
                answer2Button.addClass("btn-outline-danger");
                answer3Button.addClass("btn-outline-warning");
                answer4Button.addClass("btn-info");
            break;
            default:
                answer1Button.addClass("btn-outline-success");
                answer2Button.addClass("btn-outline-danger");
                answer3Button.addClass("btn-outline-warning");
                answer4Button.addClass("btn-outline-info");
            break;
        }
    }

    function calculateResult(){
        quizOverviewSection.hide();
        answerButtonsSection.hide();
        previousButton.hide();
        endButton.hide();
        nextButton.hide();
        saveButton.hide();
        loadButton.hide();

        var correctAnswers = 0;
        var answersResult = "";
        for (var i = 0; i < questionsForQuiz; i++) {
            answersResult += "<br><br><br>Frage " + (i + 1) + ": " + questions[i];
            answersResult += "<br>Deine Antwort: " + answers[i][givenAnswers[i]];
            answersResult += "<br>Richtige Antwort: " + answers[i][rightAnswers[i]];
            if (rightAnswers[i] == givenAnswers[i]) {
                correctAnswers++;
            }
        }

        var result = "You have answered " + correctAnswers + " out of " + questionsForQuiz + " correct!";

        questionLabel.html(result + answersResult);
    }

    function saveQuiz() {
        for (var i = 0; i < questionsForQuiz; i++) {
            localStorage.setItem('question' + i, questions[i]);
            localStorage.setItem('answers' + i, answers[i]);
            localStorage.setItem('rightAnswer' + i, rightAnswers[i]);
            localStorage.setItem('givenAnswer' + i, givenAnswers[i]);
        }
        localStorage.setItem('index', index);
    }

    function loadQuiz() {
        for (var i = 0; i < questionsForQuiz; i++) {
            questions[i] = localStorage.getItem('question' + i);
            var answersStrings = localStorage.getItem('answers' + i).split(',');
            rightAnswers[i] = localStorage.getItem('rightAnswer' + i);
            givenAnswers[i] = parseInt(localStorage.getItem('givenAnswer' + i));
            for (var j = 0; j < 4; j++) {
                answers[i][j] = answersStrings[j];
            }
        }
        index = parseInt(localStorage.getItem('index')) - 1;

        endButton.hide();
        startQuiz();
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
