const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
const massive = require('massive');




const checkForSession = require('./middlewares/checkForSession');

const app = express();

app.use( bodyParser.json() );

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)})
  
  app.use( session({
    secret: 'hfjkahhgrajg23',
    resave: false,
    saveUninitialized: false
  }));
  
  app.use( checkForSession );
  app.use( express.static( `${__dirname}/../public/build` ) );
  
  //Controllers:
  const authControllers = require('./controllers/authControllers');
  const propControllers = require('./controllers/propControllers')
  
  // User Endpoints:
  
  app.post('/api/auth/register', authControllers.register);
  app.post('/api/auth/login', authControllers.login);
  app.post('/api/auth/logout', authControllers.logout);

  // Properties Endpoints:

  app.post('/api/properties', propControllers.createProperty)
  app.get('/api/properties/:id', propControllers.getUserProps)
  app.delete('/api/properties/:userid/:id', propControllers.deleteUserProp)




const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );