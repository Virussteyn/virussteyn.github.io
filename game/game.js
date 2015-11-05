//this is my js file//
$( document ).ready(function() {

	$("#playBtn").click(function() {
		$("#exploreBody").css("background-image", "url('https://upload.wikimedia.org/wikipedia/en/c/c3/Wwtbam-uk-2010.png')");
		$("#playBtn").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").show();
	});