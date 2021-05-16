function formToTable(){
	 event.preventDefault();
var x =  document.getElementById("FORM");
console.log(x)
var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
var length=checkboxes.length;
if(length < 2){
	alert("Select atleast 2 food items");
  }
  else{
var tr = document.createElement("tr");
var td1 = document.createElement("td");
td1.innerHTML=document.getElementById("fname").value;
var td2 = document.createElement("td");
td2.innerHTML = document.getElementById("lname").value;
var td3 = document.createElement("td");
td3.innerHTML = document.getElementById("add").value;
var td4 = document.createElement("td");
td4.innerHTML = document.getElementById("pin").value;
var td5 = document.createElement("td");
td5.innerHTML = document.FORM.gender.value;

var td6 = document.createElement("td");
var chosen = document.querySelectorAll('input[name="food"]:checked'); //Array of Ids
console.log(chosen);
var arr=[];
chosen.forEach((x) => {arr.push(x.value);});
arr=arr.join()
td6.innerHTML = arr ;

var td7 = document.createElement("td");
td7.innerHTML = document.getElementById("state").value;

var td8 = document.createElement("td");
td8.innerHTML = document.getElementById("cntry").value;


tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
document.getElementById("tbody").append(tr);

document.getElementById("FORM").reset();

  }

}

 

	 

