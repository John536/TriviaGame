

var intervalId;
var time = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;


function calculate1() {
            if (document.getElementById('Burglary').checked) {
            	correct++;
            	console.log("correct " + correct);
            } else if (document.getElementById('Assault').checked || document.getElementById('Breaking').checked) {
				incorrect++;
				console.log("incorrect " + incorrect)

				} else { 
					unanswered++;
					console.log("unanswered " + unanswered);
				}
}

function calculate2() {
            if (document.getElementById('slap').checked) {
            	correct++;
            	console.log("correct " + correct);
            } else if (document.getElementById('dad').checked || document.getElementById('no').checked) {
				incorrect++;
				console.log("incorrect " + incorrect)

				} else { 
					unanswered++;
					console.log("unanswered " + unanswered);
				}
}
            
function calculate3() {
            if (document.getElementById('lawyers').checked) {
            	correct++;
            	console.log("correct " + correct);
            } else if (document.getElementById('clients').checked || document.getElementById('executives').checked) {
				incorrect++;
				console.log("incorrect " + incorrect)

				} else { 
					unanswered++;
					console.log("unanswered " + unanswered);
				}
}

//document ready function
$(document).ready(function() {
		//start button 
		$("#startButton").on("click", function() {
			start();
			$("form").css("visibility", "visible");		                      
        })
})


function start () {
	intervalId = setInterval(count, 1000);
	
}

function count() {
	time--;
	console.log(time)
	$("#displayTime").html(time);

		if (time <= 0) {  
			clearInterval(intervalId);
			calculate1();
			calculate2();
			calculate3();
			$("#game").html("Correct = " + correct + "<br> Incorrect = " + incorrect + "<br> Unanswered = " + unanswered);
			time = 30;
			 correct = 0;
			 incorrect = 0;
			 unanswered = 0;
			
		}

}

