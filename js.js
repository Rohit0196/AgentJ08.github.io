var imagecount = 1;
var total = 23;

function slide(x) {
	var image = document.getElementById('img');
	imagecount = imagecount + x;
	if(imagecount > total) {imagecount = 1;}
	if(imagecount < 1) {imagecount = total;}
	image.src = "mypics/mypic"+ imagecount +".jpg";
}

window.setInterval(function slideA(){
	var image = document.getElementById('img');
	imagecount = imagecount + 1;
	if(imagecount > total) {imagecount = 1;}
	if(imagecount < 1) {imagecount = total;}
	image.src = "mypics/mypic"+ imagecount +".jpg";
	},5000);

var imagecount2 = 1;
var total2 = 17;

function slide2(x) {
	var image2 = document.getElementById('img2');
	imagecount2 = imagecount2 + x;
	if(imagecount2 > total2) {imagecount2 = 1;}
	if(imagecount2 < 1) {imagecount2 = total2;}
	image2.src = "myclicks/myclicks"+ imagecount2 +".jpg";
}

window.setInterval(function slideA(){
	var image2 = document.getElementById('img2');
	imagecount2 = imagecount2 + 1;
	if(imagecount2 > total2) {imagecount2 = 1;}
	if(imagecount2 < 1) {imagecount2 = total2;}
	image2.src = "myclicks/myclicks"+ imagecount2 +".jpg";
	},5000);


function hideloader(){
	document.getElementById("loading").style.display = "none";
}

var countDownDate = new Date("Jan 1, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = "           PS:- " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s remaining in 2018. :P";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Happy New Year!";
  }
}, 1000);
