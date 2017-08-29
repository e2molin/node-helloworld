module.exports = function(staticContent, data){
  //Estemode lo tiene dos objetos string y un objeto developer
  return{
    staticContent: staticContent || {
      title: '',
      subtitle: '',
      filterPlaceHolder: '',
      app: {}
    },
    data: JSON.stringify(data ||{
      developers: [],
      filterQuery: ''
    })
  };
};
