(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");


   

   

    NarrowItDownController.$inject = ['MenuSearchService', '$window'];
    function NarrowItDownController(MenuSearchService, $window) {
        var monControlleur = this;
   
        monControlleur.found = [];
        monControlleur.message = "";
        monControlleur.foundControlleurResearch = function (search) {
            if (search === undefined || search === "") {
                monControlleur.found = [];
                monControlleur.message = "Nothing found";
            } else {
                var promise = MenuSearchService.getMatchedMenuItems(search);
                promise.then(function success(result) {
                  
                    if (result.length === 0) {
                        monControlleur.found = [];
                        monControlleur.message = "Nothing found";
                    } else {
                        monControlleur.found = result;
                        monControlleur.message = "";
                      
                        
                    }
                }, function (error) {
                    if (error.status === 404) {
                        $window.alert("  The page you were looking for doesn't exist (404) ");
                    } else {
                        $window.alert(" An error has occured : " + error.status + ":" + error.statusText);
                    }
                   
                });
            }
           

        };
       
        monControlleur.removeItem = function(indexToremove) {
            monControlleur.found.splice(indexToremove, 1);
        };

    };

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {

        var service = this;
        var found = [];
        service.getMatchedMenuItems = function (term) {
            function reussite(response) {
                found = [];
                angular.forEach(response.data.menu_items, function(element) {
                    if (element.description.indexOf(term) !== -1) {
                        found.push(element);
                    }
                });

                return found;
            };

           return $http({ method: "GET", url: ApiBasePath })
               .then(reussite);

        };


    }
})();