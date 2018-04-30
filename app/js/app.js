var app = angular.module("navimate", [
    'ui.router',
]);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(function ($stateProvider, $urlRouterProvider) {

    // Configure URL mapping for non existent URLs
    $urlRouterProvider.when('', '/')

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: '/views/home.html',
          controller: 'HomeCtrl'
      })
      .state('contact', {
          url: '/contact',
          templateUrl: '/views/contact.html',
          controller: 'ContactCtrl'
      })
});
