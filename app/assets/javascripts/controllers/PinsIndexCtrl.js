pinBoard.controller('PinsIndexCtrl', ['$scope', 'pins', 'Restangular', 'PinAPIService', function($scope, pins, Restangular, PinAPIService){
  $scope.pins = pins;
  $scope.updateId = -1;
  $scope.updatingStatus = true;

  $scope.pinForm = {user_id: 1};

  $scope.submit = function(id){
    if ($scope.updateId  === -1){
      if ($scope.pinForm.buy_sell === "true"){
        $scope.pinForm.buy_sell = true;
      } else {
        $scope.pinForm.buy_sell = false;
      }
      // use restangular to create POST http request passing in the data on $scope.form.
      console.log($scope.pinForm);

      // Got from form $scope.pinForm
      // console.log($scope.pinForm);
      var promise = PinAPIService.Create($scope.pinForm);
      promise.then(function(response){
        $scope.pins.push(response);
      });
    }
    else {
      PinAPIService.Update($scope.updateId , $scope.pinForm).then(function(){

      });
      console.log($scope.pins.indexOf($scope.pinForm));
      $scope.updateId = null;
    }
  };

  $scope.removePin = function(i){
    var id = $scope.pins[i].id;

    PinAPIService.Delete(id).then(function(){
      
      $scope.pins.splice(i,1);
    });
  };


  $scope.updatePin = function(i){
    
    $scope.updateId = $scope.pins[i].id;
    $scope.pinForm = $scope.pins[i];
  };



}] );
