const meetUp = angular.module("meetUp", ["ngRoute"]);

// routing
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
});	

// controller
meetUp.controller("mainCtrl", ["$scope", function($scope) {
	$scope.eventName = "";
	$scope.eventDescription = "";
	$scope.eventLocation = "";
}]);
