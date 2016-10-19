var questionNumber = 0;
var score = 0;


function showQuestion(questionNo) {

	var x = document.getElementsByClassName("question");
	for(var i=0;i<x.length;i++){
	//hide paragraph
	x[i].style.display="none";
	
	}
	
	//if we are not on the last question display the new question 
	//otherwise display the final paragraph
	if (questionNo<x.length){
	 x [questionNo].style.display = "block";
	 }
	 else{
	  document.getElementById('complete').style.display = "block";
	  }
	  
	  }
	  
	  
	  
	 
	  $(".question span").click(function(){
	  
	  if ($(this).hasClass("correct")) {
			score++;
	  }
	  
	  
	 document.getElementById("score").innerHTML=score;
	 questionNumber++;
	  showQuestion(questionNumber);
	  
	  
	 });
	  
	  