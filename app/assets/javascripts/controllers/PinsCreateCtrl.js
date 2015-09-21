pinBoard.controller('PinsCreateCtrl', ['$scope', 'PinAPIService', function($scope, PinAPIService){


$scope.submit = function(){
  // use restangular to create POST http request passing in the data on $scope.form.

  // Got from form $scope.pinForm
  console.log($scope.pinForm);
  PinAPIService.Create($scope.pinForm);
};



}]);
