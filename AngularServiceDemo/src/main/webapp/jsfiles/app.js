var app=angular.module('myApp',[]);

app.factory('dataService',function($http){
	var factory={
		getData:getData
	}
	return factory;
	function getData()
	{
		return $http({
			method:'get',
			url:'http://rest-service.guides.spring.io/greeting'
			
		});
	}
});

app.controller('myCtrl',function($scope,dataService){
	dataService.getData()
	.then(function(response){
		$scope.obj=response.data;
	})
});