var container = document.createElement("div");
container.setAttribute("class","container");
var row = document.createElement("div");
row.setAttribute("class","row");
var col = document.createElement("div");
col.setAttribute("class","col-12");

var table=document.createElement("table");
table.width="100%"
table.classList.add("table","table-bordered"); 
table.setAttribute("id","myTable");
table.setAttribute("style", "border:3px solid black;box-shadow: 0px 0px 15px 2px grey");
var thead=document.createElement("thead");
thead.classList.add("thead-light"); 
//creating thead and tbody
var tbody=document.createElement("tbody");
var tr1=document.createElement("tr");
var th1=document.createElement("th");
th1.setAttribute("style", "border:3px solid black; text-align:center;background: linear-gradient(to bottom, #ffff66 0%, #ffcc66 100%); font-size:18px;color:black");
var th2=document.createElement("th");
th2.setAttribute("style", "border:3px solid black; text-align:center;background: linear-gradient(to bottom, #ffff66 0%, #ffcc66 100%); font-size:18px;color:black");
var th3=document.createElement("th");
th3.setAttribute("style", "border:3px solid black; text-align:center;background: linear-gradient(to bottom, #ffff66 0%, #ffcc66 100%); font-size:18px;color:black");
th1.innerHTML="ID";
th2.innerHTML="Name";
th3.innerHTML="Email";

tr1.append(th1,th2,th3);
thead.append(tr1);
table.append(thead);
table.append(tbody);
col.append(table);
row.append(col);
container.append(row);
document.body.append(container);

//HHTP REQUEST
var request= new XMLHttpRequest();

request.open('GET','https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json',true);

request.send();

request.onload=function(){
	var data = JSON.parse(this.response);
	console.log(data);


//creating 10 rows with 3 cols each
	for(var i=0; i<10;i++){
var tr_i = document.createElement("tr")
for(var j=0;j<3;j++){
	var ID = "row"+i+"col"+j;
var td_j = document.createElement("td")	
td_j.setAttribute("style", "border:2px solid black; text-align:center;");
td_j.setAttribute("id",ID)
tr_i.append(td_j);
}
tbody.append(tr_i);
}

var butid = 0;
//Buttons created and ID added
var col2 = document.createElement("div");
col2.classList.add("col-12");
col2.align="center";
for(var i=0; i<10;i++){
var but_i = document.createElement("button")
but_i.setAttribute("id",i);
but_i.classList.add("btn","m-1")
but_i.addEventListener("click",Button_ID)
but_i.setAttribute("style","font-weight:bold;color:black;border:2px solid black;background: linear-gradient(to bottom, #ffff66 0%, #ffcc66 100%)")
but_i.innerHTML=i+1;
col2.append(but_i);
}

var Next = document.createElement("button")
Next.innerHTML= "Next";
Next.setAttribute("id","Next")
Next.addEventListener("click",nextPage);
Next.classList.add("btn","m-1")
Next.setAttribute("style","font-weight:bold;color:black;border:2px solid black;background: linear-gradient(to bottom, #ffff66 0%, #ffcc66 100%)")
var Previous = document.createElement("button")
Previous.innerHTML="Previous";
Previous.setAttribute("id","Previous")
Previous.addEventListener("click",previousPage);
Previous.classList.add("btn","m-1")
Previous.setAttribute("style","font-weight:bold;color:black;border:2px solid black;background: linear-gradient(to bottom,#ffff66 0%, #ffcc66 100%)")
col2.append(Next,Previous);
row.append(col2);

function Button_ID(event){
	butid = (event.target.id);
	table(butid)
}
//alloting ID to each TD element
for(var i=0; i<10;i++){
	for(var j=0;j<3;j++){
var x= document.getElementById("row"+i+"col"+j);
	}
}

//Event for next button
function nextPage(){
	if(butid !== 9){
	butid++
	}
	table(butid)
	}
//Event for prev button
function previousPage(){
	if(butid !== 0){
	butid--;
	}
	table(butid)
	}

// Function call to Create table on load
table(butid);

// Function to fill data in table dynamically
	function table(n){
		console.log(n)
		if(n==0){
		var index = 0}
		else{
	var index= n+"0";
		}
for(var i=0;i<10;i++){
	for(var j=0;j<3;j++){
var x= document.getElementById("row"+i+"col"+j);
if(j==0){
x.innerHTML=data[index].id;
	}
	if(j==1){
x.innerHTML=data[index].name;
	}
	if(j==2){
x.innerHTML=data[index].email;
	}
}
parseInt(index)
index++
console.log(typeof index)
}
}
}