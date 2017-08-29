//Definimos un objeto para acceder a las funciones del directorio helpers
var developersHelper = require('../helpers/developers');
//Lo datos los guardamos en una estructura de modelo. Alfichero de modelo model.js se accede así
var model = require('./model');
//La estructura es la misma que en la del controlador homepage
module.exports = function (req,res){
  var developerId = req.params.developerId;

   developersHelper.getDeveloperById(developerId).then(function (developer){
     var staticContent = {
       developer: developer,
       app: {
         title: 'My Company | ' + (developer.firstName + ' ' + developer.lastName)
       }
     };
     var data = {};
     res.render('developers-detail/view',model(staticContent,data));
   });


}
