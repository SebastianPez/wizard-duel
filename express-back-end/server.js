const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const knex = require('./knex/knex.js');

App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));


App.get('/api/wizards', (req, res) => {
  let response = function(characters) {
    let wizards = {wizards:characters}
    res.json({
      message:`Coming back from the server with the wizards ${wizards}`,
      wizards
    });
  }
  knex.select('*').from('characters')
  .then(characters => response(characters));
});

App.get('/api/spells', (req, res) => {
  let response = function(thespells) {
    let spells = {spells:thespells}
    res.json({
      message:`Coming back from the server with the spells ${spells}`,
      spells
    });
  }
  knex.select('*').from('spells')
  .then(thespells => response(thespells));
});

App.post('/api/endgame?', (req, res) => {
  console.log(req.query.username);
  knex('users').where({ username: req.query.username }).update({ experience_points: 100})
  .then(console.log('db updated'));
  knex('users').insert({ id: 44, username: 'dobby', email: 'houseelvesrule@gmail.com', password: 123, experience_points: 1000, wins: 50, losses:1 })
  .then(console.log('dobby added'));
});


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});