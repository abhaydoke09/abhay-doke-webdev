/**
 * Created by abhaydoke on 10/01/17.
 */

(function(){
    angular
        .module("WebAppMaker")
        .factory("WidgetService",WidgetService);

    var widgets = [
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>In light of those possibilities, some of tech’s biggest names launched an initiative on Tuesday to help “steer AI in a way that maximizes the benefits to society.” That includes eBay founder Pierre Omidyar and LinkedIn founder Reid Hoffman, who will each donate $10 million to <a href="http://www.knightfoundation.org/articles/ethics-and-governance-of-artificial-intelligence-fund" target="_blank" rel="noopener">the Ethics and Governance of Artificial Intelligence Fund</a>, anchoring its initial investment of $27 million.<br></p>'},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/OiNTC0pLrFM" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];
    function WidgetService(){
        var api = {
            findWidgetsForPageId:findWidgetsForPageId
        }
        return api;

        function findWidgetsForPageId(pageId){
            var resultSet = [];
            for(var i in widgets){
                if(widgets.pageId===pageId){
                    resultSet.push(widgets[i]);
                }
            }
            //return resultSet;
            return widgets;
        }

    }

})();