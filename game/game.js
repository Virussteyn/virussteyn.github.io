//this is my js file//
$(document).ready(function() {

	$("#playBtn").click(function() {
		$("#Gamebody").css("background-image", "url('https://upload.wikimedia.org/wikipedia/en/c/c3/Wwtbam-uk-2010.png')");
		$("#playBtn").hide();

    }); 
});

var begin = prompt("are you ready");
var correctAnswer = 0;
while (correctAnswer!=1) {
var question1 = prompt("What is the correct answer? A, B, or C?").toUpperCase();

switch(question1) {
    case 'A':
    alert("wrong");
    break;
        
    case 'B':
    alert("correct");
    correctAnswer = 1;
    break;
        
    case 'C':
    alert("wrong, try again");
    break;
}
}