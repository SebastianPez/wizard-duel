exports.up = function(knex, Promise) {
  return knex.schema.table('spells', function(t) {
      t.string('animation');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('spells', function(t) {
      t.dropColumn('animation');
  });
};