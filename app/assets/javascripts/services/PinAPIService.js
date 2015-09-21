pinBoard.service('PinAPIService',['Restangular',
  function(Restangular){

    var basePins = Restangular.all('pins');
    this.Read = function(){
      return basePins.getList();
    };

    this.Update = function(id, newPin){
      var pin = Restangular.one('pins', id);
      pin.item_name = newPin.item_name;
      pin.description = newPin.description;
      pin.buy_sell = pin.buy_sell;

      return pin.put();
      
    };

    this.Show = function(id){
      return Restangular.one('pins', id);
    };

    this.Create = function(newPin){
      return basePins.post(newPin);
    };

    this.Delete = function(id){
      console.log('service id ', id);
      return Restangular.one('pins', id).remove();
    };


  }


  ]);
