angular.module('directory.services', [])
.factory('DirectoryService', function($q) {


    return {

        /*listMovies: function(type, extra){
            extra = angular.extend({ limit:10, country: 'fj' }, extra||{});
            return list() + 'movies/' + type + '.json?' + addParams(extra).join('&');
        },*/

        listMovies: function(type, extra){

            var movieslist ='';
            return movieslist;            
         },        

        findById: function(movieid){
            var detail = base + 'movies/'+ movieid +'.json?apikey=' + API_KEY + '&callback=JSON_CALLBACK';
            return detail;

        },
        findClipsById: function(movieid){
             var clips = base + 'movies/'+ movieid +'/clips.json?apikey=' + API_KEY + '&callback=JSON_CALLBACK';
            return clips;

        }        
    };

})

.factory('LoaderService', function($rootScope, $ionicLoading) {

  // Trigger the loading indicator
  return {
        show : function() { //code from the ionic framework doc

            // Show the loading overlay and text
            $rootScope.loading = $ionicLoading.show({

              // The text to display in the loading indicator
              content: '<i class="icon ion-loading-c"></i>',

              // The animation to use
              animation: 'fade-in',

              // Will a dark overlay or backdrop cover the entire view
              showBackdrop: true,

              // The maximum width of the loading indicator
              // Text will be wrapped if longer than maxWidth
              maxWidth: 0,

              // The delay in showing the indicator
              showDelay: 10
            });
        },
        hide : function(){
            $rootScope.loading.hide();
        }
    }
});




















