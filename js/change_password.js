    
angular.module('change_password.controllers', [])

.controller('tab_Change_Password', function($scope,$http,$rootScope,$ionicHistory,$state) {
	//**** When the user logs out and reaches login page,
    //**** we clear all the history and cache to prevent back link
    $scope.$on('$ionicView.enter', function(ev) {
      if(ev.targetScope !== $scope){
        $ionicHistory.clearHistory();
        $ionicHistory.clearCache();
      }
    });
	
	
	//**** Change Password 
	$scope.change_password_submit = function(fields){
		var data = {'email':fields.username,'old_password':fields.old_password,'new_password':fields.new_password};
		$http.post("http://smartquiz.thesmartbridge.com/API/change_password?email="+fields.username+"&old_password="+fields.old_password+"&new_password="+fields.new_password, data)
			.success(function(response, status, headers, config){
				if(response.err == '0' || response.err == '0')
				{
					alert(response.msg);
				}
				else
				{
					alert(response.msg);
					$state.go('tab.login', {}, {location: "replace"});
					
				}
				
			}).error(function(err, status, headers, config){
				alert('Network problem');
			});
		
	}
	
	
});