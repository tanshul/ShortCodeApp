angular.module('directory.controllers', [])

 //TODO 
 // Add to contact capability
 // Favorites capability
 
    .controller('DirectoryIndexCtrl', function ($scope, $http , $stateParams) {
        $scope.toggleProjects = function() {
            $scope.sideMenuController.toggleLeft();
        };

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
        }

    })

    .controller('DirectoryListCtrl', function ($scope, $http , $stateParams) {
        $scope.toggleProjects = function() {
            $scope.sideMenuController.toggleLeft();
        };

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
        }

        var findAll = function(listingtype) {
            $scope.sideMenuController.close();// hide side menu once clicked
 
            $http.get('https://www.dropbox.com/s/8s5moq4n1h0ga4z/Taxis.json',{ cache: true})
            .success(function(data){
                $scope.getTitle = function () {return listingtype}    //hack to get title working                
                 $scope.items = data.directory;
            });          
        }

        findAll($stateParams.listingtype);
    })

    .controller('AddCtrl', function ($scope, $http) {
        $scope.toggleProjects = function() {
            $scope.sideMenuController.toggleLeft();
        };

        $scope.searchKey = "";

        $scope.submitForm = function() {
            //when form is submitted, set formposted to true to show message
            $scope.formposted = true;            
        };
    })    

    .controller('HelpCtrl', function ($scope, $http) {
        var goback = function() {
            alert("");
         
        };
    })
;

