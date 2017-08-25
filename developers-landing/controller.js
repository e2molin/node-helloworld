var developersHelper = require('../helpers/developers')
var model = require('./model');
module.exports = function (req,res){
  //Obtenemos una lista con los objetos desarrollador.
  //Después de cada objeto extraemos el nombre en un array de nombres, que luego concatenamos para mostrar
  var developers = developersHelper.getAllDevelopers();
  res.render('developers-landing/view',model('My Company','Desarrolladores',developers));

}
