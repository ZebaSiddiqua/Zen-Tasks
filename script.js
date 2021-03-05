
//Step 1: To create a request variable.
var request= new XMLHttpRequest();

//Step 2: Create a connection.
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//Step 3: Send the request
request.send();

//Step 4: load the response
request.onload=function()
{

		
	var data = JSON.parse(this.response);
	console.log(data);

//Get all the countries from Asia continent / “region” using Filter method
var regionAsia = data.filter(x=>x.region == "Asia").map(x=>x.name)
console.log("The countries in Asia are" , regionAsia);


//Get all the countries with population of less than 2 lacs using Filter method 

var Population = data.filter(x=>x.population < 200000).map(x => {return x.name})
console.log("The countries with less than 2lacs" , regionAsia);


//Print the following details name, capital, flag using forEach. 
var details = data.forEach(x => console.log("The details of country " , x.name , "are" , [x.name , x.capital , x.flag]))

//Print the total population of countries using the reduce method.
var totalpopulation = data.reduce((sum,x) => {sum+=x.population ; return sum},0)
console.log("The total population of all countries is " , totalpopulation)

//Print the country which uses US Dollars as currency.
var USdollar = data.filter(x => x.currencies[0].name === "United States dollar" || x.currencies[0].name === "United State Dollar" ).map(x => x.name)
console.log("The countries in Asia with currency US Dollar" , USdollar);
}