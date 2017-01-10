(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;
  list.errorMessageListToBuy="Everything is bought!";
  list.showErrorMessageListToBuy=false;
  list.items = ShoppingListCheckOffService.getToBuyList();

  list.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };

}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;
  list.errorMessageBoughtList="Nothing bought yet.";

  list.items = ShoppingListCheckOffService.getBoughtList();

}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [{
    name: 'Coca Cola bottles',
    quantity: 10
  }
  ,
  {
    name: 'Crush Juice bottles',
    quantity: 15
  },
  {
    name: 'Sprite bottles',
    quantity: 5
  },
  {
    name: 'Orange juice bottles',
    quantity: 8
  },
  {
    name: 'Water bottles',
    quantity: 9
  }];


  var boughtList=[];


  service.moveItem = function (itemIndex) {
    var itemToMove = {
      name: toBuyList[itemIndex].name,
      quantity: toBuyList[itemIndex].quantity
    };
    boughtList.push(itemToMove);

    toBuyList.splice(itemIndex, 1);

  };

  service.getToBuyList = function () {
        return toBuyList;
  };
  service.getBoughtList = function () {
    return boughtList;
  };

}



})();
