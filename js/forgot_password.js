    
angular.module('forgot_password.controllers', [])

.controller('forgot_password', function($scope,$http,$rootScope,$ionicHistory,$state) {
	//**** When the user logs out and reaches login page,
    //**** we clear all the history and cache to prevent back link
    $scope.$on('$ionicView.enter', function(ev) {
      if(ev.targetScope !== $scope){
        $ionicHistory.clearHistory();
        $ionicHistory.clearCache();
      }
    });
	
	//**** Forgot Password 
	$scope.forgot_password_submit = function(forgot_password,fields){
		console.log('submited');
		if(fields.email != '' && fields.mobile != '')
		{
			var data = {'email':fields.email,'mobile':fields.mobile};
			$http.post(ip_address+"api/forgot_password", data)
			.success(function(response, status, headers, config){
				if(response == 0 || response == '0')
					alert('Your details are not matched with our records')
				else
					alert('Your password is : '+ Base64.decode(response));
				
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