var countShowClick = 0;

function hideLoader(){
	document.getElementById("loader").style.display = "none";
}

function showLoader(){
	countShowClick++;
	document.getElementById("loader").style.display = "inline";
	setTimeout(function() { hideLoader() }, 1000);
	setTimeout(function() { changeAfterShowLoader() }, 1200);
}

function changeAfterShowLoader(){
	if(countShowClick==1){
		document.getElementById("p1").innerHTML = "Impressed right?";
		document.getElementById("b1").innerHTML = "Wanna try again?";
	}
	else{
		document.getElementById("p1").innerHTML = "Again????? <br /> Hire me already!";
		document.getElementById("b1").innerHTML = "Ofc.<br />Show me now!";	
	}
}

