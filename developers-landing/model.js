module.exports = function(title,subtitle,developers){
  //Estemode lo tiene dos objetos string y un objeto developer
  return{
    title: title || 'Developers',
    subtitle: subtitle,
    developers: developers
  };
};
