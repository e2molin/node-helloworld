//Definimos un objeto para acceder a las funciones del directorio helpers
var developersHelper = require('../helpers/developers');
//Lo datos los guardamos en una estructura de modelo. Alfichero de modelo model.js se accede así
var model = require('./model');
//La estructura es la misma que en la del controlador homepage
module.exports = function (req,res){
  var developerId = req.params.developerId;
  var developer = developersHelper.getDeveloperById(developerId);//Así llamamos a la función
  //Antes usábamos res.send. Pero ahora para usar el motor de plantillas, utilizamos res.render
  res.render('developers-detail/view',model(developer));

}
