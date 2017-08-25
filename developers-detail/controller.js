//Definimos un objeto para acceder a las funciones del directorio helpers
var developersHelper = require('../helpers/developers');
var model = require('./model');
//La estructura es la misma que en la del controlador homepage
module.exports = function (req,res){
  var developerId = req.params.developerId;
  var developer = developersHelper.getDeveloperById(developerId);//Así llamamos a la función
  //res.send('Información de ' + developer.name);//Usamos comillas simples, por lo que no utilizamos sintaxis express

  res.render('developers-detail/view',model(developer));

}
