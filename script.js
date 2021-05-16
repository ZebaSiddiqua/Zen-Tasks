var first = document.getElementById('first');
first.addEventListener('mouseover', colorMe);
first.addEventListener('mouseleave',colorMeNot);

function colorMe(event) {

  event.target.style.color = 'white';
  event.target.style.backgroundColor = 'brown';
}

function colorMeNot(event) {
   event.target.style.color = 'black';
   event.target.style.backgroundColor = 'white';
}


var prom=document.getElementById('prom');
prom.addEventListener("click", input);
function input(){
	var name = prompt("Enter your name");
document.getElementById("output").innerHTML = "Your name has been recordered as:" + name;
}

var given=document.getElementById('cordinates');
given.addEventListener("click", showCoords);
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X-cordinate: " + x + ", Y-cordinate: " + y;
  document.getElementById("cords").innerHTML = coords;
}

var entered = document.getElementById('entered');
entered.addEventListener('input', display);

function display(e){
    const maxLength = e.target.getAttribute('maxlength');
    const currentLength = e.target.value.length;
	document.getElementById("used").innerHTML = currentLength + "/" + maxLength;
}

var binary = document.getElementById('binary');
var hexa = document.getElementById('hexa');

binary.addEventListener("click", conB);
hexa.addEventListener("click", conH);

function conB(){
	var bin = document.getElementById('num').value;
	var convB = parseInt(bin).toString(2);
	document.getElementById("converted").innerHTML = "The binary representation of the given decimal number is " + convB;
}

function conH(){
	var hex = document.getElementById('num').value;
	var convH = parseInt(hex).toString(16);
	document.getElementById("converted").innerHTML = "The hexadecimal representation of the given decimal number is " + convH;
}

var form=document.getElementById("verify");
form.addEventListener("click",formValidation)

function formValidation(){
var name = document.Form.name.value;
var ph = document.Form.phn.value; 
var email = document.Form.email.value;
var pass = document.Form.pass.value;


	
	if (name == "" || name == null)
	{
		alert("Enter Valid Name");
	}

   else if (ph.length < 10 )
	{
		alert("Enter Valid Phone Number");
	}

    else if (email=="")
	{
		alert("Enter Valid Phone Number");
	}
	
	else if (pass.length < 10)
	{
		alert("Enter Valid Password");
	}
}

var Full =document.getElementById("full");
var Exit =document.getElementById("exit");
var img=document.getElementById("complete")
var btn=document.getElementById("exit")

Full.addEventListener("click",fullScreen);
function fullScreen(){
	img.requestFullscreen();
	btn.style.visibility= "visible" ;
}

Exit.addEventListener("click",exitScreen);
function exitScreen(){
	document.exitFullscreen();
	btn.style.visibility= "hidden" ;
}


var Google =document.getElementById("google");
Google.addEventListener("click", openWindow)
var myWIndow;
function openWindow(){
  myWindow = window.open("",  "_blank", "width=500, height=500");
}
var spcae=document.getElementById("space");
space.addEventListener("keypress", SpaceBar);
function SpaceBar(event){
	if(event.code === "Space")
	{
		alert("Thankyou!!");
		myWindow.close();
	}
	else
	{
		alert("Invalid Key pressed");
	}
}

let Edit = document.getElementById('edit');
Edit.addEventListener('mouseover', editP) 

function editP() {
    Edit.contentEditable = true;
}

Edit.addEventListener('mouseleft', function () {
    Edit.contentEditable = false;
});

