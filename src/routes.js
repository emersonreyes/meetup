module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('welcomepage', {
      url: '/',
      templateUrl: './app/welcome.html'
    })
    .state('createaccountpage', {
      url: '/createaccount',
      templateUrl: './app/createaccount.html',
      controller: 'accountController'
    })
    .state('datetimepage', {
      url: '/datetime',
      templateUrl: './app/datetime.html',
      controller: 'mainController'
    })
    .state('guestlistpage', {
      url: '/guestlist',
      templateUrl: './app/guestlist.html',
      controller: 'mainController'
    })
    .state('eventpage', {
      url: '/createevent',
      templateUrl: './app/createevent.html',
      controller: 'mainController'
    });
}
