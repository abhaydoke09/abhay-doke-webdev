/**
 * Created by abhaydoke on 11/01/17.
 */
/**
 * Created by abhaydoke on 10/01/17.
 */

(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService",PageService);


    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
    ];

    function PageService(){

        var api = {
            findPageByWebsiteId : findPageByWebsiteId,
            findPageById : findPageById,
            createPage : createPage,
            deletePage : deletePage,
            updatePage : updatePage
        };

        return api;

        function findPageByWebsiteId(websiteId){
            var resultSet = [];
            for(var i in pages){
                if(pages[i].websiteId===websiteId){
                    resultSet.push(pages[i]);
                }
            }
            return resultSet;
        }

        function findPageById(pageId){
            console.log(pageId);
            for(var i in pages){
                if(pages[i]._id===pageId){
                    return pages[i];
                }
            }
            return null;
        }

        function createPage(websiteId,name,title){
            var newPage ={
                _id:(new Date()).getTime()+"",
                name:name,
                description:title,
                websiteId:websiteId
            };
            pages.push(newPage);
            return newPage;
        }

        function deletePage(pageId){
            for(var i in pages){
                if(pages[i]._id===pageId){
                    pages.splice(i,1);
                    return true;
                }
            }
            return false;
        }

        function updatePage(pageId,name,title){
            for(var i in pages){
                if(pages[i]._id===pageId){
                    pages[i].title = title;
                    return true;
                }
            }
            return false;
        }
    }
})();