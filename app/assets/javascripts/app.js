var pinBoard = angular.module('pinBoard', ['ui.router', 'restangular'])


.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({"content-type": "application/json"});
}])

.config(["$urlRouterProvider", "$stateProvider",
          function($urlRouterProvider, $stateProvider ){

  $stateProvider
    .state("pins", {
      url: "/pins",
      templateUrl: 'templates/pinsLayout.html'
      
    })
    .state('pins.index',{
      url: "/index",
      controller: 'PinsIndexCtrl',
      templateUrl: 'templates/pinsIndex.html',
      resolve: {
        pins: ['Restangular', function(Restangular){
          return Restangular.all('pins').getList();
        }]}

    })
    .state('pins.create',{
      url: '/create',
      //templateUrl: 'templates/PinsCreate.html',
      views: {
        'formPin': {
          
          controller: function(){console.log('inside pinscreate');},
          templateUrl: 'templates/PinForm.html'
        },
        '' : {templateUrl: 'templates/PinsCreate.html'}

      }
    })
    .state('pins.edit', {
      url: '/edit',
      templateUrl: 'templates/PinsEdit.html',
      views: {
        'formPin' :{
          templateUrl: 'templates/PinForm.html'
        }
      }
    });
    
}]);
