module.exports = function(staticContent, developer) {

  return {
    developer: developer,
    staticContent: staticContent
  };

    //app = (app != undefined) ? app : {};

    //app.production = (process.env.NODE_ENV === 'PRODUCTION');

/*    return {
        content: content || {
            developer: '',
            app
        },
        data: JSON.stringify(data || {
            developers: [],
            filterQuery: ''
        })
    };*/

};
