
(function () {
    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to tab 1 if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider
             .state('home', {
                 url: '/',
                 templateUrl: 'index.html'
             })
          .state('categories', {
              url: '/Categories',
              templateUrl: 'src/templates/categories.html',
              controller: 'CategorieListController as categorieCtrl',
              resolve: {
                  categoriesList: ['MenuDataService', function (MenuDataService) {
                      return MenuDataService.getAllCategories();
                  }]
              }

          })

          .state('details', {
              url: '/item-detail/{categoryForSearch}',
              templateUrl: 'src/templates/items.html',
              controller: 'itemsListController as itemsCtrl',
              resolve: {
                  itemsList: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
                      return MenuDataService.getItemsForCategory($stateParams.categoryForSearch);
                  }]
              }
          });
    }
})();
