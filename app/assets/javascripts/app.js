var pinBoard = angular.module('pinBoard', ['ui.router', 'restangular'])


.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({"content-type": "application/json"});
}])

.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider ){

  $stateProvider
    .state("pins", {
      url: "/pins",
      templateUrl: 'templates/pinsLayout.html',
      controller: function(){console.log("pins angular controller");}

    })
    .state('pins.index',{
      url: "/index",
      templateUrl: 'templates/pinsIndex.html',
      controller: 'PinsIndexCtrl',
      resolve: {
        pins: ['Restangular', function(Restangular){
          return Restangular.all('pins').getList();
        }]}
    });
}]);
