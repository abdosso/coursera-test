(function () {
    angular.module('data')
        .controller('itemsListController', itemsListController);
    
    itemsListController.$inject = ['itemsList'];

    function itemsListController( itemsList) {
        var itemDetailsCtrl = this;
    
        itemDetailsCtrl.detailsList = itemsList;
     
    };

})();