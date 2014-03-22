angular.module('directory.controllers', [])
    .controller('DirectoryIndexCtrl', function ($scope, $http , $stateParams, DirectoryService, LoaderService) {
      $scope.toggleProjects = function() {
        $scope.sideMenuController.toggleLeft();
       };

        $scope.searchKey = "";
        
        $scope.clearSearch = function () {
            $scope.searchKey = "";
         }

        var findAll = function() {
             $scope.sideMenuController.close();// hide side menu once clicked
             LoaderService.show();

             $http.get('smart.json',{ cache: true})
                .success(function(data){
                    $scope.getTitle = function () {return listingtype}    //hack to get title working                
                    LoaderService.hide();
                    $scope.items = data.directory;
              });          
        }

        findAll();

    })

    .controller('DirectoryListCtrl', function ($scope, $http , $stateParams, DirectoryService, LoaderService) {
       $scope.toggleProjects = function() {
        $scope.sideMenuController.toggleLeft();
       };
        $scope.searchKey = "";
        
        $scope.clearSearch = function () {
            $scope.searchKey = "";
         }
        var findAll = function(listingtype) {
             $scope.sideMenuController.close();// hide side menu once clicked
             LoaderService.show();

             $http.get(listingtype +'.json',{ cache: true})
                .success(function(data){
                    $scope.getTitle = function () {return listingtype}    //hack to get title working                
                    LoaderService.hide();
                    $scope.items = data.directory;
              });          
        }

        findAll($stateParams.listingtype);
    })
;

