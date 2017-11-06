var app = require('./config/server');

//var rota_noticias = require('./app/routes/noticias');
//rota_noticias(app);

//var rota_home = require('./app/routes/home')(app);

//var rota_formulario = require('./app/routes/fomulario_inclusao_noticia');
//rota_formulario(app);

app.listen(3000, function(){
    console.log("Servidor ON");
});