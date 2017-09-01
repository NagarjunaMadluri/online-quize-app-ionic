angular.module('logout.controllers', [])

.controller('logout', function($scope,$http,$rootScope,$ionicHistory,$state) {
	
	$scope.sign_out = function()
	{
		userid = '';
		user_name = '';
		user_type = '';	
		bucketid  = '';
		bucket_view_status  = '';
		$state.go('tab.login', {}, {location: "replace"});
	}
	
	
	 
	
});


