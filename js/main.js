const meetUp = angular.module("meetUp", ["ngRoute"]);

meetUp.controller("mainCtrl", ["$scope", "$route", function($scope, $route) {
	$scope.page = "home";
	console.log($scope.page);
}]);