var express=require('express');
var app=express();
var request = require('request');





app.get('/WeatherForecast/:city/:days',function(req,res)
{
	//var zipcode=req.params.zipcode;
	

	//var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=70433264efb1d52056b541ebdd67a618&zip='+zipcode+"'";
	var city=req.params.city;
	var days=req.params.days;
	
	console.log(days);
	var requestUrl='http://api.openweathermap.org/data/2.5/forecast/daily?&appid=70433264efb1d52056b541ebdd67a618&mode=json&units=metric&q='+city+'&cnt='+days;
	
	console.log(requestUrl);
	
	//var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=70433264efb1d52056b541ebdd67a618&zip=94040';
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Request-Method', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET,POST');
		res.setHeader('Access-Control-Allow-Headers', '*');
	 request(requestUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            // parse the json result
            var result = JSON.parse(body);
			//console.log(result);
			res.json(result);
			
		}
		
		
	 });
	
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});