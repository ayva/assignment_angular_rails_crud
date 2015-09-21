pinBoard.service('PinAPIService',['Restangular',
  function(Restangular){

    var basePins = Restangular.all('pins');
    this.Read = function(){
      return basePins.getList();
    };

    this.Update = function(id){
      return Restangular.put('pins', id).post(newPin);
    };

    this.Show = function(id){
      return Restangular.one('pins', id);
    };

    this.Create = function(newPin){
      return basePins.post(newPin);
    };

    this.Delete = function(id){
      return Restangular.one('pins', id).remove();
    };


  }


  ]);