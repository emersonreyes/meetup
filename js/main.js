const meetUp = angular.module("meetUp", ["ngRoute", "ngAnimate"]);

meetUp.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "pages/welcome.html",
		controller: "mainCtrl"
	})
	.when("/createaccount", {
		templateUrl: "pages/createaccount.html",
		controller: "mainCtrl"
	})
	.when("/createevent", {
		templateUrl: "pages/createevent.html",
		controller: "mainCtrl"
	})
	.when("/datetime", {
		templateUrl: "pages/datetime.html",
		controller: "mainCtrl"
	})
});

// services
meetUp.service("getStartDate", function() {
	this.startDate = "";
});

meetUp.directive('focus', function($timeout) {
	return {
		scope: {
			trigger: '@focus'
		},
		link: function(scope, element) {
			scope.$watch('trigger', function(value) {
				if (value === "true") {
					$timeout(function() {
						element[0].focus();
					});
				}
			});
		}
	};
}); 

meetUp.controller("mainCtrl", ["$scope", "getStartDate", function($scope, getStartDate) {
	
	$scope.eventStartDate = "";

	
	

	$scope.eventName = "";
	$scope.eventHost = "";
	$scope.eventLocation = "";

	$scope.submitForm = function() {
		console.log($scope.eventName);
		console.log($scope.eventHost);
		console.log($scope.eventLocation);
		console.log($scope.eventStartDate);
	};
}]);






	






