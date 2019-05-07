
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spells').del()
    .then(function () {
      // Inserts seed entries
      return knex('spells').insert([
        {id: 1, name: 'Confrigo', description:'Fiery cast, dealing 2 damage  your opponent.', cost: 0, cast_limit: 100, power: 2, turns: 1, affect_opponent: false, unlock_level: 1, light: true, dark: true, animation:'/spells/left/confrigo.gif',  rightAnimation:'/spells/right/confrigo.gif'},
        {id: 2, name: 'Confrigo', description:'Fiery cast, dealing 3 damage to your opponent.', cost: 0, cast_limit: 100, power: 3, turns: 1, affect_opponent: false, unlock_level: 3, light: true, dark: true, animation:'/spells/left/confrigo.gif',  rightAnimation:'/spells/right/confrigo.gif'},
        {id: 3, name: 'Confrigo', description:'Fiery cast, dealing 5 damage to your opponent.', cost: 0, cast_limit: 100, power: 5, turns: 1, affect_opponent: false, unlock_level: 5, light: true, dark: true, animation:'/spells/left/confrigo.gif',  rightAnimation:'/spells/right/confrigo.gif'},
        {id: 4, name: 'Confrigo', description:'Fiery cast, dealing 7 damage to your opponent.', cost: 0, cast_limit: 100, power: 7, turns: 1, affect_opponent: false, unlock_level: 7, light: true, dark: true, animation:'/spells/left/confrigo.gif',  rightAnimation:'/spells/right/confrigo.gif'},
        {id: 5, name: 'Confrigo', description:'Fiery cast, dealing 9 damage to your opponent.', cost: 0, cast_limit: 100, power: 9, turns: 1, affect_opponent: false, unlock_level: 9, light: true, dark: true, animation:'/spells/left/confrigo.gif',  rightAnimation:'/spells/right/confrigo.gif'},

        {id: 6, name: 'Bombarda', description:'Deals 3 damage from the explosive nature of the charm.', cost: 2, cast_limit: 3, power: 3, turns: 1, affect_opponent: false, unlock_level: 1, light: true, dark: true, animation:'/spells/left/bombarda.gif', rightAnimation:'/spells/right/bombarda.gif'},
        {id: 7, name: 'Bombarda', description:'Deals 2 damage from the explosive nature of the charm.', cost: 1, cast_limit: 1, power: 2, turns: 1, affect_opponent: false, unlock_level: 2, light: true, dark: true, animation:'/spells/left/bombarda.gif', rightAnimation:'/spells/right/bombarda.gif'},
        {id: 8, name: 'Bombarda', description:'Deals 5 damage from the explosive nature of charm.', cost: 2, cast_limit: 2, power: 5, turns: 1, affect_opponent: false, unlock_level: 4, light: true, dark: true, animation:'/spells/left/bombarda.gif', rightAnimation:'/spells/right/bombarda.gif'},
        {id: 9, name: 'Bombarda', description:'Deals 8 damage from the explosive nature of the charm.', cost: 3, cast_limit: 3, power: 8, turns: 1, affect_opponent: false, unlock_level: 6, light: true, dark: true, animation:'/spells/left/bombarda.gif', rightAnimation:'/spells/right/bombarda.gif'},
        {id: 10, name: 'Bombarda', description:'Deals 9 damage from the explosive nature of the charm.', cost: 4, cast_limit: 4, power: 9, turns: 1, affect_opponent: false, unlock_level: 8, light: true, dark: true, animation:'/spells/left/bombarda.gif', rightAnimation:'/spells/right/bombarda.gif'},

        {id: 11, name: 'Alohomora', description:'Unlocks doors, questionable for use in battle.', cost: 0, cast_limit: 100, power: 0, turns: 1, affect_opponent: false, unlock_level: 2, light: true, dark: true, animation:'/spells/left/alohamora.gif', rightAnimation:'/spells/right/alohamora.gif'},
        {id: 12, name: 'Alohomora', description:'Unlocks doors, questionable for use in battle.', cost: 0, cast_limit: 100, power: 0, turns: 1, affect_opponent: false, unlock_level: 4, light: true, dark: true, animation:'/spells/left/alohamora.gif', rightAnimation:'/spells/right/alohamora.gif'},
        {id: 13, name: 'Alohomora', description:'Unlocks doors, questionable for use in battle.', cost: 0, cast_limit: 1, power: 30, turns: 1, affect_opponent: false, unlock_level: 7, light: true, dark: true, animation:'/spells/left/alohamora.gif', rightAnimation:'/spells/right/alohamora.gif'},

        {id: 14, name: 'Sectumsempra', description:'Deals 8 damage to your opponent.', cost: 10, cast_limit: 1, power: 8, turns: 1, affect_opponent: false, unlock_level: 4, light: false , dark: true, animation:'/spells/left/sectumsempra.gif', rightAnimation:'/spells/right/sectumsempra.gif'},
        {id: 15, name: 'Sectumsempra', description:'Deals 12 damage to your opponent.', cost: 13, cast_limit: 1, power: 12, turns: 1, affect_opponent: false, unlock_level: 6, light: false , dark: true, animation:'/spells/left/sectumsempra.gif', rightAnimation:'/spells/right/sectumsempra.gif'},
        {id: 16, name: 'Sectumsempra', description:'Deals 15 damage to your opponent.', cost: 20, cast_limit: 1, power: 15, turns: 1, affect_opponent: false, unlock_level: 8, light: false , dark: true, animation:'/spells/left/sectumsempra.gif', rightAnimation:'/spells/right/sectumsempra.gif'},

        {id: 17, name: 'Aqua Eructo', description:'Torrent of water shoots at opponent, causing 4 damage.', cost: 3, cast_limit: 3, power: 4, turns: 1, affect_opponent: false, unlock_level: 3, light: true, dark: true, animation:'/spells/left/aqua_eructo.gif', rightAnimation:'/spells/right/aqua_eructo.gif'},
        {id: 18, name: 'Aqua Eructo', description:'Torrent of water shoots at opponent, causing 7 damage.', cost: 5, cast_limit: 3, power: 7, turns: 1, affect_opponent: false, unlock_level: 5, light: true, dark: true, animation:'/spells/left/aqua_eructo.gif', rightAnimation:'/spells/right/aqua_eructo.gif'},
        {id: 19, name: 'Aqua Eructo', description:'Torrent of water shoots at opponent, causing 12 damage.', cost: 7, cast_limit: 3, power: 12, turns: 1, affect_opponent: false, unlock_level: 7, light: true, dark: true, animation:'/spells/left/aqua_eructo.gif', rightAnimation:'/spells/right/aqua_eructo.gif'},
        {id: 20, name: 'Aqua Eructo', description:'Torrent of water shoots at opponent, causing 15 damage.', cost: 7, cast_limit: 2, power: 12, turns: 1, affect_opponent: false, unlock_level: 9, light: true, dark: true, animation:'/spells/left/aqua_eructo.gif', rightAnimation:'/spells/right/aqua_eructo.gif'},

        {id: 21, name: 'Avada Kedavra', description:'Severely damages opponents shield, causes instantaneous death when it lands. Damage 30', cost: 30, cast_limit: 1, power: 30, turns: 1, affect_opponent: false, unlock_level: 6, light: false, dark: true, animation:'/spells/left/a.gif', animation:'/spells/left/a.gif', rightAnimation:'/spells/right/a.gif'},
        {id: 22, name: 'Avada Kedavra', description:'Severely damages opponents shield, causes instantaneous death when it lands. Damage 30', cost: 32, cast_limit: 1, power: 30, turns: 1, affect_opponent: false, unlock_level: 7, light: false, dark: true, animation:'/spells/left/a.gif', animation:'/spells/left/a.gif', rightAnimation:'/spells/right/a.gif'},
        {id: 23, name: 'Avada Kedavra', description:'Severely damages opponents shield, causes instantaneous death when it lands. Damage 40', cost: 40, cast_limit: 1, power: 40, turns: 1, affect_opponent: false, unlock_level: 9, light: false, dark: true, animation:'/spells/left/a.gif', animation:'/spells/left/a.gif', rightAnimation:'/spells/right/a.gif'},

        {id: 24, name: 'Repello Inimicum', description:'A defensive spell causing 9 damage.', cost: 9, cast_limit: 1, power: 8, turns: 1, affect_opponent: false, unlock_level: 4, light: true , dark: false, animation:'/spells/left/repello_inimicum.gif', rightAnimation:'/spells/right/repello_inimicum.gif'},
        {id: 25, name: 'Repello Inimicum', description:'A defensive spell causing 13 damage.', cost: 11, cast_limit: 1, power: 13, turns: 1, affect_opponent: false, unlock_level: 6, light: true , dark: false, animation:'/spells/left/repello_inimicum.gif', rightAnimation:'/spells/right/repello_inimicum.gif'},
        {id: 26, name: 'Repello Inimicum', description:'A defensive spell causing 15 damage.', cost: 17, cast_limit: 1, power: 15, turns: 1, affect_opponent: false, unlock_level: 8, light: true , dark: false, animation:'/spells/left/repello_inimicum.gif', rightAnimation:'/spells/right/repello_inimicum.gif'},

        {id: 27, name: 'Vulnera Sanentur', description:'Severely damages opponents shield, causes dark soul to crumble when it lands. Damage 30', cost: 29, cast_limit: 1, power: 30, turns: 1, affect_opponent: false, unlock_level: 6, light: true , dark: false, animation:'/spells/left/vulnera_sanentur.gif', rightAnimation:'/spells/right/vulnera_sanentur.gif'},
        {id: 28, name: 'Vulnera Sanentur', description:'Severely damages opponents shield, causes dark soul to crumble when it lands. Damage 30', cost: 31, cast_limit: 1, power: 30, turns: 1, affect_opponent: false, unlock_level: 7, light: true , dark: false, animation:'/spells/left/vulnera_sanentur.gif', rightAnimation:'/spells/right/vulnera_sanentur.gif'},
        {id: 29, name: 'Vulnera Sanentur', description:'Severely damages opponents shield, causes dark soul to crumble when it lands. Damage 40', cost: 39, cast_limit: 1, power: 40, turns: 1, affect_opponent: false, unlock_level: 9, light: true , dark: false, animation:'/spells/left/vulnera_sanentur.gif', rightAnimation:'/spells/right/vulnera_sanentur.gif'},

        {id: 30, name: 'Protego', description:'Boosts your defence by 2.', cost: 0, cast_limit: 100, power: 2, turns: 1, affect_opponent: false, unlock_level: 1, light: true, dark: true, animation:'/spells/left/protego.gif', rightAnimation:'/spells/right/protego.gif'},
        {id: 31, name: 'Protego', description:'Boosts your defence by 3.', cost: 0, cast_limit: 100, power: 3, turns: 1, affect_opponent: false, unlock_level: 3, light: true, dark: true, animation:'/spells/left/protego.gif', rightAnimation:'/spells/right/protego.gif'},
        {id: 32, name: 'Protego', description:'Boosts your defence by 5.', cost: 0, cast_limit: 100, power: 5, turns: 1, affect_opponent: false, unlock_level: 5, light: true, dark: true, animation:'/spells/left/protego.gif', rightAnimation:'/spell/right/protego.gifs'},
        {id: 33, name: 'Protego', description:'Boosts your defence by 7.', cost: 0, cast_limit: 100, power: 7, turns: 1, affect_opponent: false, unlock_level: 7, light: true, dark: true, animation:'/spells/left/protego.gif', rightAnimation:'/spell/right/protego.gifs'},
        {id: 34, name: 'Protego', description:'Boosts your defence by 9.', cost: 0, cast_limit: 100, power: 9, turns: 1, affect_opponent: false, unlock_level: 9, light: true, dark: true, animation:'/spells/left/protego.gif', rightAnimation:'/spell/right/protego.gifs'},

        {id: 35, name: 'Apparate', description:'Change your position on the board.', cost: 5, cast_limit: 2, power: 0, turns: 1, affect_opponent: false, unlock_level: 6, light: true, dark: true, animation:'/spells/left/aparate.gif', rightAnimation:'/spells/right/aparate.gif'},

      ]);
    });
};
