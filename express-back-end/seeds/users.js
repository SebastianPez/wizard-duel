
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Sebastian', email: 'seb@seb.ca', password:'', experience_points:0, wins: 0, losses:0 },

        {id: 2, username: 'Ronan', email: 'ronan@ronan.ca', password:'lighthouse', experience_points:0, wins: 1, losses:1 },

        {id: 3, username: 'Kira', email: 'kira@kira.ca', password:'Yukon', experience_points:0, wins: 2, losses:2 },
      ]);
    });
};
