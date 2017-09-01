angular.module('dashboard.controllers', [])

.controller('dashboard', function($scope,$http,$rootScope,$ionicHistory,$state) {
	if(userid == '')
	{
		//$state.go('tab.login', {}, {location: "replace"});
	}
	
	
	//**** When the user logs out and reaches login page,
    //**** we clear all the history and cache to prevent back link
    $scope.$on('$ionicView.enter', function(ev) {
      if(ev.targetScope !== $scope){
        $ionicHistory.clearHistory();
        $ionicHistory.clearCache();
      }
    });
	
		var arg = {'userId':userid};
		console.log(user_name);
		$scope.username = user_name;
			
		
		
	//**** Dashboard

	/*$http.post(ip_address+"api/get_no_yards",arg)
		.success(function(response, status, headers, config){
			$scope.no_yards = response.length;
			
		}).error(function(err, status, headers, config){
			alert('Network problem');
		});
		
		$http.post(ip_address+"api/check_out_buckets",arg)
		.success(function(response, status, headers, config){
			$scope.check_out_buckets = response.length;
			
		}).error(function(err, status, headers, config){
			alert('Network problem');
		});*/
		
		
		
		
		
	
	
});