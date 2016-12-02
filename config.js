module.exports = {
  /*switch(process.env.NODE_ENV){
    case 'development':
        return {
          'secret': 'securebanking',
          'database': 'mongodb://bank:bank123#@ds119508.mlab.com:19508/heroku_d9lrkfdg'
        };

    case 'production':
        return {
          'secret': 'securebanking',
          'database': 'mongodb://127.0.0.1/auth'
        };

    default:
        return {error or other settings};
  }*/
  'secret': 'ilovescotchyscotch',
 //  'database': 'mongodb://bank:bank123#@ds119508.mlab.com:19508/heroku_d9lrkfdg'
  'database': 'mongodb://127.0.0.1/auth'

};
