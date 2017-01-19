/**
 * Created by abhaydoke on 16/01/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("FlickrService",FlickrService);

    var key = "3a1df98476aae5b2a29100676283b59a";
    console.log(key);
    var secret = "fcf9dcbf854270d5";
    var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

    function FlickrService($http){
        var api = {
            searchPhotos:searchPhotos
        };
        return api;

        //var key = "3a1df98476aae5b2a29100676283b59a";



        function searchPhotos(search){
            //var key = "8ce912aa7642ee64767e30bd13575d98";

            var url = urlBase.replace("API_KEY", key).replace("TEXT", search);
            console.log(url);
            return $http.get(url);

        }
    }
})();