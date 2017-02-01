
(function () {
    'use strict';
    angular.module('NarrowItDownApp')
           .directive('foundItems', FoundItemsDirective);


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItemList.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: foundListDirectiveController,
            controllerAs: 'foundDirectiveControlleur',
            bindToController: true
        };
        return ddo;

    }
    foundListDirectiveController.$inject = ['MenuSearchService'];
    function foundListDirectiveController(MenuSearchService) {


    };
})();