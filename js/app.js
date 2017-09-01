// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.services', 'ionic-datepicker','ngCordovaBeacon', 'starter.controllers',  'login.controllers', 'forgot_password.controllers','change_password.controllers','scan.controllers','search.controllers','dashboard.controllers','favourites.controllers','non_users_bucket.controllers','bom.controllers','bucket.controllers','sell.controllers','sold.controllers','sell.controllers','rent.controllers','check_in.controllers','reports.controllers','replaceable_parts.controllers','parts.controllers','logout.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
	
	window.addEventListener('BluetoothStatus.enabled', function() {
    console.log('Bluetooth has been enabled');
    });
	
	window.addEventListener('BluetoothStatus.disabled', function() {
    alert('Bluetooth has been disabled');
	});
	
	
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	   cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) { 
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}) 

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider,$compileProvider) {
	 $ionicConfigProvider.tabs.position('bottom');
	 $ionicConfigProvider.navBar.alignTitle('center');
	  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  $stateProvider
	 .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.login', {
    url: '/login',
	cache: false,   
    views: {
      'tab-login': { 
        templateUrl: 'templates/tab-login.html',
        controller: 'tab_login'
      }
    }
  })
  .state('tab.forgot_password', {
    url: '/forgot_password',
	cache: false,  
    views: {
      'tab-forgot_password': { 
        templateUrl: 'templates/tab-forgot_password.html',
        controller: 'forgot_password'
      }
    }
  })
  .state('tab.Change_Password', {
    url: '/Change_Password',
	cache: false,  
    views: {
      'tab-Change_Password': { 
        templateUrl: 'templates/tab-Change_Password.html',
        controller: 'tab_Change_Password'
      }
    }
  })
  
  
  
  
  
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  .state('app.dashboard', {
	cache: false,  
    url: "/dashboard",
	views: {
		'menuContent':{
       templateUrl: "templates/dashboard.html",
		 controller: 'dashboard'
		}
    }
  })

  
  .state('app.about', {
	cache: false,
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html",
		controller: 'scan'
      }
    }
  })

  .state('app.Categories', {
	cache: false,
    url: "/Categories",
    views: {
      'menuContent': {
        templateUrl: "templates/Categories.html",
		controller: 'favourites'
      }
    }
  })
  .state('app.exam_details', {
	cache: false,
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/exam_details.html",
		controller: 'search'
      }
    }
  })
  .state('app.exam', {
	cache: false,
    url: "/exam",
    views: {
      'menuContent': {
        templateUrl: "templates/exam.html",
		controller: 'reports'
      }
    }
  })
  
  
  .state('app.logout', {
	cache: false,  
    url: "/logout",
    views: {
      'menuContent': {
		templateUrl: "templates/logout.html",
		controller: 'logout'
      }
    }
  })
  
  
  // ******************** Bucket details side bar **************************8
  .state('bucket', {
    url: "/bucket",
    abstract: true,
	cache: false,
    templateUrl: "templates/bucket.html",
    controller: 'bucket'
  })
 
	.state('bucket.bom', {
	cache: false,	
	url: "/bom",
	views: {
      'bucket-menu': {
        templateUrl: "templates/bom.html",
		 controller: 'bom'
      }
    }
  })
  
  .state('bucket.replaceable_parts', {
	cache: false,  
    url: "/replaceable_parts",
    views: {
      'bucket-menu': {
        templateUrl: "templates/replaceable_parts.html",
		 controller: 'replaceable_parts'
      }
    }
  })
  .state('bucket.parts', {
	cache: false,  
    url: "/parts",
    views: {
      'bucket-menu': {
        templateUrl: "templates/parts.html",
		 controller: 'parts'
      }
    }
  })
  .state('bucket.sell', {
	cache: false,  
    url: "/sell",
    views: {
      'bucket-menu': {
        templateUrl: "templates/sell.html",
		 controller: 'sell'
      }
    }
  })
  .state('bucket.rent', {
	cache: false,
    url: "/rent",
    views: {
      'bucket-menu': {
        templateUrl: "templates/rent.html",
		 controller: 'rent'
      }
    }
  })
  .state('bucket.status', {
	cache: false,  
    url: "/status",
    views: {
      'bucket-menu': {
        templateUrl: "templates/status.html",
		 controller: 'sold'
      }
    }
  })
   .state('bucket.checkin', {
	cache: false,
    url: "/checkin",
    views: {
      'bucket-menu': {
        templateUrl: "templates/checkin.html",
		 controller: 'check_in'
      }
    }
  })
  .state('bucket.non_users_bucket', {
	cache: false,
    url: "/non_users_bucket",
    views: {
      'bucket-menu': {
		templateUrl: "templates/non_users_bucket.html",
		controller: 'non_users_bucket'
      }
    }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/app/playlists');
  $urlRouterProvider.otherwise('/tab/login');
});
