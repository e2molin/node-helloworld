module.exports = {
  getDeveloperById: function(id){
    var developers = this.getAllDevelopers();//This indica que la función está dentro de este objeto
    var developersWithId = developers.filter(function(developer){
      return (developer.id===id);
    });

    var developer=developersWithId[0];

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
    return [
      {
          id: 'ryan',
          name: 'Ryan Collins Jr',
          favouriteLanguage: 'Java',
          gender: 'male',
          image: 'http://www.cronicadelnoa.com.ar/web/wp-content/uploads/2016/05/john-snow-120x120.jpg'
      },
      {
        id:'erik',
        name: 'Ned Stark',
        favouriteLanguage: 'Python',
        gender: 'male',
        image: 'https://a09.t26.net/taringa/avatares/7/0/0/9/2/0/skate_09/120x120_E49.jpg'
      },
      {
        id: 'emma',
        name: 'Emma Collins',
        favouriteLanguage: 'Objective-C',
        gender: 'female',
        image: 'http://www.cineymas.com.ar/wp-content/uploads/2016/07/HBO-Game-of-Thrones-Temporada-7-120x120.jpg'
      },
      {
        id:'olivia',
        name: 'Olivia Hunttington',
        favouriteLanguage: 'Go',
        gender: 'female',
        image:'http://i2.cdn.cnn.com/cnnnext/dam/assets/170726180510-game-of-thrones-small-11.jpg'
      }
    ]
  }
}
