﻿(function () {
    angular.module('data')
       .component('items', {
           templateUrl: 'src/templates/items.template.html',
         //  controller: ItemsComponentController ,
           bindings: {
               itemsListForComponent: '<'
           }
       });

  
})();