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
	.when("/datetime", {
		templateUrl: "pages/datetime.html",
		controller: "mainCtrl"
	})
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

meetUp.controller("mainCtrl", ["$scope", function($scope) {

}]);

    






