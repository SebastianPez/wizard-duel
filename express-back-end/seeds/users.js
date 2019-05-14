
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'sebastian', email: 'seb@seb.ca', password:'', experience_points:1000, wins: 0, losses:0 },

        {id: 2, username: 'ronan', email: 'ronan@ronan.ca', password:'lighthouse', experience_points:0, wins: 0, losses:0 },

        {id: 3, username: 'kira', email: 'kira@kira.ca', password:'Yukon', experience_points:900, wins: 0, losses:0 },
      ]);
    });
};
