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
    case 'HASHIM AMLA':
    alert("Correct");
    correctAnswer=1;
    break;
        
    case 'AB DE VILLIERS':
    alert("wrong");
    break;
        
    case 'FAF DU PLESSIS':
    alert("wrong, try again");
    break;
});
});

while (correctAnswer!=1) {

	var question2 = prompt("Who is the ODI captain of India in cricket? Virat Kohli, MS Dhoni or Suresh Raina?").toUpperCase();

	switch(question 2) {
		case 'MS DHONI':
		alert("Wrong");
		break;

		case 'SURESH RAINA':
        alert("Wrong");
        break;

        case 'VIRAT KOHLI':
        alert("Correct");
        break;

	}
}




