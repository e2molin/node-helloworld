var developersHelper = require('../helpers/developers')
//Accedemos al modelo model.js. No es necesaria la extensión
var model = require('./model');
module.exports = function (req,res){
  //Obtenemos una lista con los objetos desarrollador.
  developersHelper.getAllDevelopers().then(function(developers){
    var staticContent = {
      title: 'Developers',
      subtitle: 'Look at this nerds',
      filterPlaceHolder: 'Find a developer',
      app:{
        title: 'My Company | Developers'
      }
    };

    console.log(req.query);

    var data = {
      developers: developers,
      filterQuery: (req.query.search) ? req.query.search : ''
    }

    res.render('developers-landing/view',model(staticContent,data));
  });
  /*
    Ahora al motor de renderizado de la plantilla, mandamos la vista y el modelo con los datos. el modelo contiene
    dos objetos string y un objeto developer
  */

}
