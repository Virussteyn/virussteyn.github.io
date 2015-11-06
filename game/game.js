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
var question1 = prompt("Who is the test captain of South Africa? Hashim Amla, AB De Villiers or Faf Du Plessis?").toUpperCase();

switch(question1) {
    case 'Hashim Amla':
    alert("Correct");
    correctAnswer=1;
    break;
        
    case 'AB De Villiers':
    alert("wrong");
    break;
        
    case 'Faf Du Plessis':
    alert("wrong, try again");
    break;
}
}