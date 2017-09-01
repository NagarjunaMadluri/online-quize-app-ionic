        
angular.module('login.controllers', [])

.controller('tab_login', function($scope,$http,$rootScope,$ionicHistory,$state) {
	
	if(userid != '')
	{
		$state.go('app.dashboard', {}, {location: "replace"});
	}
	//**** When the user logs out and reaches login page,
    //**** we clear all the history and cache to prevent back link
    $scope.$on('$ionicView.enter', function(ev) {
      if(ev.targetScope !== $scope){
        $ionicHistory.clearHistory();
        $ionicHistory.clearCache();
      }
    });

	
	
	//**** Login Form submitted
	$scope.submitform = function(cred) {
		if(cred.email != '' && cred.password != '')
		{
			var data = {'email':cred.email,'password':cred.password};
			 $http.post("http://smartquiz.thesmartbridge.com/API/logins?email="+cred.email+"&password="+cred.password+"", data)
			.success(function(response, status, headers, config){
				if(response.err == '0' || response.err == '0')
				{
					alert('Invalid Logins');
				}
				else
				{
					console.log(response);
					userid = response.UserKey ;
					user_name = response.Username ;
					//user_name = response.name ;
					$state.go('app.dashboard', {}, {location: "replace"});
					
				}
			}).error(function(err, status, headers, config){
				alert('Network Problem');
			});		 
			
				 
			
		}
		else
		{
			alert('Please fill the details');
		}
	}	
	
	//**** Forgot Password 
	$scope.forgot_password = function(forgot_password,fields){
		console.log('submited');
		if(fields.email != '' && fields.mobile != '')
		{
			var data = {'email':fields.email,'mobile':fields.mobile};
			$http.post( base_url+"/api/forgot_password", data)
			.success(function(response, status, headers, config){
				console.log(response);
			}).error(function(err, status, headers, config){
				alert('Network problem');
			});
		}	
		else
		{
			alert('Please fill the details');
		}	
	}
	
	
});