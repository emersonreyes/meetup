var angular = require('angular');
var routesConfig = require('./routes');

require('angular-ui-router');
require('./index.scss');

var myApp = 'myApp';
module.exports = myApp;

angular
  .module(myApp, ['ui.router'])

  // route
  .config(routesConfig)

  // service
  .service('getEventInfo', function () {
    this.eventInfo = {
      eventName: '',
      eventHost: '',
      eventLocation: '',
      startDateTime: '',
      endDateTime: '',
      eventType: ''
    };
  })

  // directive
  .directive('focus', function ($timeout) {
    return {
      scope: {
        trigger: '@focus'
      },
      link: function (scope, element) {
        scope.$watch('trigger', function (value) {
          if (value === 'true') {
            $timeout(function () {
              element[0].focus();
            });
          }
        });
      }
    };
  })

  // controllers
  .controller('mainController', ['$scope', '$state', 'getEventInfo', function ($scope, $state, getEventInfo) {
    $scope.eventInfo = getEventInfo.eventInfo;

    $scope.$watch('eventInfo', function () {
      getEventInfo.eventInfo.eventName = $scope.eventInfo.eventName;
      getEventInfo.eventInfo.eventHost = $scope.eventInfo.eventHost;
      getEventInfo.eventInfo.eventLocation = $scope.eventInfo.eventLocation;
      getEventInfo.eventInfo.startDateTime = $scope.eventInfo.eventStartDate;
      getEventInfo.eventInfo.endDateTime = $scope.eventInfo.eventEndDate;
      getEventInfo.eventInfo.eventType = $scope.eventInfo.eventType;
    });

    $scope.goToPage = function (page) {
      $state.go(page);
    };

    $scope.submitForm = function () {
      $scope.errorTypes = [];

      if ($scope.eventInfo.eventHost === '') {
        $scope.errorTypes.push({
          type: "Add an event host."
        });
      }
      if ($scope.eventInfo.eventStartDate === undefined) {
        $scope.errorTypes.push({
          type: "Add a start date and time."}
        );
      }
      if ($scope.eventInfo.eventEndDate === undefined) {
        $scope.errorTypes.push({
          type: "Add an end date and time."
        });
      }
      if ($scope.errorTypes.length > 0) {
        $scope.validationMessage = 'Please correct the error/s.';
      } else {
        $scope.validationMessage = 'success!';
      }
    };
  }])

  .controller('accountController', ['$scope', function ($scope) {
    $scope.checkPass = function () {
      // an array of object w/ error messages
      $scope.errorTypes = [];

      // regex, uppercase letters
      $scope.upperRegEx = /[A-Z]/g;

      // password need a capital letter
      if (!$scope.password.match($scope.upperRegEx)) {
        $scope.errorTypes.push({
          type: 'At least one capital letter.'
        });
      }
      // password needs 6 characters or more
      if ($scope.password.length < 6) {
        $scope.errorTypes.push({
          type: 'Minimum of 6 characters.'
        });
      }
      // if the array is not empty
      // for the validation message, I didn't use "setCustomValidity" bec. it only
      // works when you double click not single click.
      if ($scope.errorTypes.length > 0) {
        $scope.validationMessage = 'Please correct the error/s.';
      } else {
        $scope.validationMessage = 'success!';
      }
    };
  }]);
