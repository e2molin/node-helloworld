module.exports = {
  getDeveloperById: function(id){
    var developers = this.getAllDevelopers();//This indica que la función está dentro de este objeto
    var developer = developers[id];
    if(developer===undefined){
      return {
        name: 'Nobody',
        favouriteLanguage: 'Nothing',
        gender: 'neither'
      };
    } else {
      return developer;
    }
  },
  getAllDevelopers: function(){
    return {
      'ryan':{
          name: 'Ryan Johnson',
          favouriteLanguage: 'Java',
          gender: 'male'
      },
      'erik':{
        name: 'Erik Svansson',
        favouriteLanguage: 'Python',
        gender: 'male'
      },
      'emma':{
        name: 'Emma Collins',
        favouriteLanguage: 'Objective-C',
        gender: 'female'
      },
      'olivia':{
        name: 'Olivia Hunttington',
        favouriteLanguage: 'Go',
        gender: 'female'
      }
    };
  }
}
