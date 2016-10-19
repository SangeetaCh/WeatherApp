var app=angular.module("WeatherApp",[]).
				controller("WeatherController",function($scope,$http){
			//var zipcode=75462;
			
		//	$scope.getForecastByZipcode=
		
			$scope.getForecastByZipcode = function(city,days){
				
			 $http.get('http://localhost:3000/WeatherForecast/'+city+'/'+days).then(function(response)
			  {
				 $scope.weatherData= response.data;
		
				console.log($scope.weatherData);
			  });
			 // $http({
			 // url:'http://localhost:3000/WeatherForecast/',
			 // //+zipcode+"'", 
			// method: "GET",
			// params: {zipcode:zipcode}
			 // }).then(function(response)
				// {
					
					// $scope.weatherData= response.data;
		
				     // console.log($scope.weatherData);
				// });
			};
			
			
		
			}).directive('myDirective', function() {
			return {
			restrict: 'E',
			scope: {
			weatherData: '=data'
			},
			templateUrl: 'http://localhost/WeatherApp/WeatherTileTemplate.html'
  };
			});
	
	
// .directive('myCustomer', function() {
			// return {
			// restrict: 'E',
			// scope: {
			// weather: '=name'
			// },
			// templateUrl: 'weatherTileTemplate.html'
			// };
			// })