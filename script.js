var container = document.createElement("div")
container.classList.add("container");

var row = document.createElement("div")
row.classList.add("row");

var calculator = document.createElement("div");
calculator.setAttribute("id", "calculator");
calculator.classList.add("col-10","col-sm-10","col-md-8","col-lg-5","col-xl-5","mt-4","mb-2","ml-auto","mr-auto","pb-4","rounded")
calculator.style.backgroundColor="#f2f2f2";
calculator.style.border=" 2px solid black";
calculator.style.boxShadow = "10px 10px 5px grey"
var row2 = document.createElement("div")
row2.classList.add("row");


var result=document.createElement("div");
result.setAttribute("id","result");
result.classList.add("col-11","mt-5","mb-5","ml-auto","mr-auto","pb-5")
result.setAttribute("style", "background-color: white; text-align:right ; font-size: 200%;font-weight:bold;height:50px; border:5px solid black;  box-shadow: 0px 0px 15px 2px #ffd9b3 ");
result.innerHTML="0";
row2.append(result);


var historyele = document.createElement("div")
historyele.setAttribute("id", "result")
var ph=document.createElement("p")
ph.setAttribute=("id","historyvalue");

const styles = {
    width: '100%',
    height: '100%',
	padding : '10px',
    color: 'black',
    backgroundColor: '#ffff66',
	textAlign:'center',
	fontWeight: "bold",
	fontSize: "150%",
	borderRadius: '25%',
	border:" 2px solid black"
};
var op=[ "+" , "-" ,"x", "/"]
var index = 0;
var num = 1;
for(var i = 1 ;i <= 16; i++){
var keys = document.createElement("div")
keys.classList.add("col-3","mt-1","mb-1");
keys.style.height = "14vh";
var but = document.createElement("button");
but.type="button"
Object.assign(but.style,styles)
if(i%4===0){
	but.setAttribute("id",op[index]);
	but.innerHTML=op[index];
	but.style.backgroundColor="#ffb366";
	index++
	but.addEventListener("click",display);
}
else if(i===14){
	but.setAttribute("id","0");
	but.innerHTML="0";
	but.addEventListener("click",display);
}
else if(i===13){
	but.setAttribute("id","clear")
	but.innerHTML="C";
	but.style.backgroundColor="red";
	but.addEventListener("click",Clear);
}
else if(i===15){
	but.setAttribute("id","=");
	but.innerHTML="=";
	but.style.backgroundColor="green";
	but.addEventListener("click",calculate);
}
else{
	but.setAttribute("id",num);
	but.innerHTML=num;
	num++
	but.addEventListener("click",display);
}
keys.append(but);
row2.append(keys);
}

calculator.append(row2);
row.append(calculator);
container.append(row);
document.body.append(container);

var dis = "";
function display(event){
	let operator = (event).target.id ;
	if(operator == "x"){
	  operator = "*"};
dis += operator;
result.innerHTML = dis ;
}


function calculate(){
	var res = eval(dis);
	dis=res;
	result.innerHTML = dis ;
}

function Clear(){
	dis="";
	result.innerHTML = dis; 
}