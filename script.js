//Step 1: To create a request variable.
var request= new XMLHttpRequest();

//Step 2: Create a connection.
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//Step 3: Send the request
request.send();

//Step 4: load the response
request.onload=function(){
	var data = JSON.parse(this.response);
	console.log(data);
	
	// Extract and print the total population of all the countries in the console.
	{
			var sum=0;
		for(var i in data)
		{
		  sum+= data[i].population;
		}
		console.log("Total population of all the countries is " + sum ) 
	
	}
	
}