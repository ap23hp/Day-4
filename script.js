
//question 1. 
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log(JSON.stringify({ age:5, name: "Person 1" })===JSON.stringify({ age:5, name: "Person 1" }))



//create a XHR object
var request=new XMLHttpRequest();
//this is object which conveys that we are using XMLttp request
//new keyword always create an object
//create a connection or extracting the information
//http method:GET
//API url
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//sending a connection
request.send()
//data coming from server is of type of string
//convert it into json obj
//print the details
//we will writing all manipulation functions in this function only
//q1: print the countrynames of all countries in conSole
//q2:from the above question, also print the country name alomg with capital
//print the latitude values and longitude values
//print the country flag
request.onload=function(){
var data=JSON.parse(request.response)
for(var i of data){
    console.log(`country: ${i.name},
    region: ${i.region},
    subregion: ${i.subregion} ,
population: ${i.population},
flag: ${i.flag}`)
}


}
//templte litral(backtiks-tilt symbol)
/*
   capital: ${i.capital},
    latitude: ${i.latlng[0]},
    longitude: ${i.latlng[1]},
*/
