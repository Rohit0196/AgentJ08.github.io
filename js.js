var countShowClick = 0;

function hideLoader(){
	document.getElementById("loader").style.display = "none";
}

function showLoader(){
	document.getElementById("loader").style.display = "inline";
	setTimeout(function() { hideLoader() }, 2000);
	setTimeout(function() { changeAfterShowLoader() }, 2200);
	countShowClick++;
}

function changeAfterShowLoader(){
	if(countShowClick==1){
		document.getElementById("p1").innerHTML = "Impressed right?";
		document.getElementById("b1").innerHTML = "Wanna try again?";
	}
	else{
		document.getElementById("p1").innerHTML = "Again? Hire me already!";
		document.getElementById("b1").innerHTML = "Ofc. Show me now!";	
	}
}