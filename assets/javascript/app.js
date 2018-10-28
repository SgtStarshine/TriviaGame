$(document).ready(function() {
// Variables
var questionCounter = 0;

var correct = 0;
var incorrect = 0;
var timeout = 0;

var questions = [
    {
        question: "",
        choices: [""],
        answer: ""
    },

    {
        question: "",
        choices: [""],
        answer: ""
    },

    {
        question: "",
        choices: [""],
        answer: ""
    },

    {
        question: "",
        choices: [""],
        answer: ""
    },

    {
        question: "",
        choices: [""],
        answer: ""
    }];

    // Creates the button that will start the game when clicked
    function startGame() {
        $("#startup").append('<a href="#" class="btn btn-primary" id="start-button">' + "Start" + '</a>');
	
	    $("#start-button").on("click", function(event) {

            event.preventDefault();
            
            firstQ();
            resetTimer();
	    });
    };

    // A function to establish the first question
    function firstQ() {

        var beginQuiz = $("#question-display");

        beginQuiz.empty();

        showQ();

    };
    // Function that displays the next question

    // A function used to submit and record answers

    // A function to tally and display quiz results

    // Timer functions, including...

    // A countdown for each question...

    // A countdown for each period between questions
    startGame();

});