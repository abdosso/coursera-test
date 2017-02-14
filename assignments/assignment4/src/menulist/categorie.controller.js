(function() {
    angular.module('data')
        .controller('CategorieListController', CategorieListController);

  


    CategorieListController.$inject = ['categoriesList'];

    function CategorieListController(categoriesList) {
        var myCtrl = this;
        myCtrl.categoriesList = categoriesList;

    };

})();