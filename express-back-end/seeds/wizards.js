
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {id: 1, name: 'Voldemort', army:'Death Eater', unlock_level: 10, rarity: 10, image: 'voldemort image to come', mana: 90, left_image:'/character_gifs/left_view/voldemort.gif', right_image:'/character_gifs/right_view/voldemort.gif'},
        {id: 2, name: 'Draco Malfoy', army:'Death Eater', unlock_level: 1, rarity: 1, image: 'draco image to come', mana: 90, left_image:'/character_gifs/left_view/malfoy.gif', right_image:'/character_gifs/right_view/malfoy.gif'},
        {id: 3, name: 'Bellatrix Lestrange', army:'Death Eater', unlock_level: 8, rarity: 7, image: 'bellatrix image to come', mana: 90, left_image:'/character_gifs/left_view/bellatrix.gif', right_image:'/character_gifs/right_view/bellatrix.gif'},
        {id: 4, name: 'Dolores Umbridge', army:'Death Eater', unlock_level: 2, rarity: 3, image: 'Dolores image to come', mana: 90, left_image:'/character_gifs/left_view/dolores.gif', right_image:'/character_gifs/right_view/dolores.gif'},
        {id: 5, name: 'Lucius Malfoy', army:'Death Eater', unlock_level: 3, rarity: 2, image: 'fenrir image to come', mana: 90, left_image:'/character_gifs/left_view/lucius.gif', right_image:'/character_gifs/right_view/lucius.gif'},

        {id: 6, name: 'Harry Potter', army:'Dumbledore\'s Army', unlock_level: 1, rarity: 1, image: 'Harry image to come', mana: 90, left_image:'/character_gifs/left_view/harry.gif', right_image:'/character_gifs/right_view/harry.gif'},
        {id: 7, name: 'Luna Lovegood', army:'Dumbledore\'s Army', unlock_level: 4, rarity: 4, image: 'Luna image to come', mana: 90, left_image:'/character_gifs/left_view/luna.gif', right_image:'/character_gifs/right_view/luna.gif'},
        {id: 8, name: 'Ron Weasley', army:'Dumbledore\'s Army', unlock_level: 2, rarity: 2, image: 'ron image to come', mana: 90, left_image:'/character_gifs/left_view/ron.gif', right_image:'/character_gifs/right_view/ron.gif'},
        {id: 9, name: 'Hermione Granger', army:'Dumbledore\'s Army', unlock_level: 3, rarity: 2, image: 'Hermione image to come', mana: 90, left_image:'/character_gifs/left_view/hermione.gif', right_image:'/character_gifs/right_view/hermione.gif'},
        {id: 10, name: 'Rubeus Hagrid', army:'Dumbledore\'s Army', unlock_level: 7, rarity: 5, image: 'Rubeus image to come', mana: 90, left_image:'/character_gifs/left_view/hagrid.gif', right_image:'/character_gifs/right_view/hagrid.gif'}
      ]);
    });
};
