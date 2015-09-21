pinBoard.controller('PinsCreateCtrl', ['$scope', 'PinAPIService', function($scope, PinAPIService){

$scope.pinForm = {user_id: 1}

$scope.submit = function(){
  if ($scope.pinForm.buy_sell === "true"){
    $scope.pinForm.buy_sell = true
  } else {
    $scope.pinForm.buy_sell = false
  }
  // use restangular to create POST http request passing in the data on $scope.form.
  console.log($scope.pinForm)

  // Got from form $scope.pinForm
  // console.log($scope.pinForm);
  var promise = PinAPIService.Create($scope.pinForm);
  promise.then(function(response){
    $scope.pins
  })
};



}]);
