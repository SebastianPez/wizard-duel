exports.up = function(knex, Promise) {
  return knex.schema.table('spells', function(t) {
      t.string('rightAnimation');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('spells', function(t) {
      t.dropColumn('rightAnimation');
  });
};