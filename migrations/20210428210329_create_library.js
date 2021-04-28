
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', (users) => {
    users.increment('user_id').primary();
    users.string('first_name');
    users.string('last_name');
    users.string('address')
    users.string('telephone_number')
  })

  .then(() => {
    return knex.schema
    .createTable('genre', (genre)=>{
      genre.increment('genre_id').primary();
      genre.string('genre_name')
    })
  })
  
  .then(() => {
    return knex.schema
    .createTable('current_status', (cs)=>{
      
    })
  })
};

exports.down = function(knex) {
  
};
