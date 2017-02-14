(function () {
    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var myService = this;
        myService.getAllCategories = function () {
            function success(response) {
           
                    return response.data;
            };


            return $http({
                method: "GET",
                url: ApiBasePath + "/categories.json"
            }).then(success);

        };

        myService.getItemsForCategory = function (categoryShortName) {
            function reussite(response) {
                
                return response.data.menu_items;
            };
            
            return $http({
                method: "GET",
                url: ApiBasePath + "/menu_items.json",
                params : {
                    category: categoryShortName
                }
            })
            .then(reussite);

        };
    };

   
   
})();