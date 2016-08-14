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
meetUp.service("getEventInfo", function() {
	this.eventInfo = {
		eventName: "",
		eventHost: "",
		eventLocation: "",
		startDateTime: "",
		endDateTime: "",
		eventType: ""	
	};
});

// directive for autofocus
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

// controller
meetUp.controller("mainCtrl", ["$scope", "getEventInfo", function($scope, getEventInfo) {
	$scope.eventInfo = getEventInfo.eventInfo;

	$scope.$watch("eventInfo", function() {
		getEventInfo.eventInfo.eventName = $scope.eventInfo.eventName;
		getEventInfo.eventInfo.eventHost = $scope.eventInfo.eventHost;
		getEventInfo.eventInfo.eventLocation = $scope.eventInfo.eventLocation;
		getEventInfo.eventInfo.startDateTime = $scope.eventInfo.eventStartDate;
		getEventInfo.eventInfo.endDateTime = $scope.eventInfo.eventEndDate;
		getEventInfo.eventInfo.eventType = $scope.eventInfo.eventType;
	});

}]);







	






