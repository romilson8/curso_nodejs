//var dbConnection = require('../../config/dbConnection');


module.exports = function(application){
   
    ;

    application.get('/noticias', function(req, res){

        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;


        noticiasModel.geNoticias(connection, function(error, result){
            res.render("noticias/noticias", {noticias:result});
        
        });
    });

};

