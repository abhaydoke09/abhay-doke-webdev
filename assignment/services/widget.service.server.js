/**
 * Created by abhaydoke on 17/01/17.
 */
module.exports = function (app) {
    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/uploads' });
    console.log("Widget service");
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

    app.post ("/api/upload", upload.single('myFile'), uploadImage);
    app.post("/api/page/:pageId/widget",createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);

    function uploadImage(req, res) {

        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;

        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        for(var i in widgets){
            if(widgets[i]._id===widgetId){
                console.log("Widget found");
                widgets[i].url='/uploads/'+filename;
                res.redirect("/assignment/#/user/:userId/website/:websiteId/page/:pageId/widget/"+widgetId);
                return;
            }
        }
        res.status(404).send("unable to find widget with id:"+widgetId);

    }

    function createWidget(req,res){
        console.log("creating widget at server");
        var newWidget = req.body;
        newWidget._id = (new Date()).getTime()+"";
        newWidget.text = "new header";
        newWidget.size = 2;
        widgets.push(newWidget);
        //console.log(widgets);
        res.send(200);
    }
    function findAllWidgetsForPage(req,res){
        var pageId = req.pageId;
        resultSet = [];
        for(var i in widgets){
            if(widgets.pageId===pageId){
                resultSet.push(widgets[i]);
            }
        }
        //return resultSet;
        res.send(resultSet);
        return;

    }
    function findWidgetById(req,res){

        var widgetId = req.params.widgetId;

        for(var i in widgets){
            if(widgets[i]._id===widgetId){
                console.log("Widget found");
                res.json(widgets[i]);
                return;
            }
        }
        res.status(404).send("unable to find widget with id:"+widgetId);

    }
    function updateWidget(){

    }
    function deleteWidget(){

    }




}