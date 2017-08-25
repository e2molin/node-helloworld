var developersHelper = require('../helpers/developers')
//Accedemos al modelo model.js. No es necesaria la extensión
var model = require('./model');
module.exports = function (req,res){
  //Obtenemos una lista con los objetos desarrollador.
  var developers = developersHelper.getAllDevelopers();
  /*
    Ahora al motor de renderizado de la plantilla, mandamos la vista y el modelo con los datos. el modelo contiene
    dos objetos string y un objeto developer
  */
  res.render('developers-landing/view',model('My Company','Desarrolladores',developers));
}
