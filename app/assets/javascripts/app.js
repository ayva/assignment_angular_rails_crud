var pinBoard = angular.module('pinBoard', ['ui.router', 'restangular'])


.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])
