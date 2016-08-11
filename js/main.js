const meetUp = angular.module("meetUp", ["ngRoute"]);

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

meetUp.controller("mainCtrl", ["$scope", "$route", function($scope, $route) {
	$scope.page = "home";
	console.log($scope.page);
}]);
