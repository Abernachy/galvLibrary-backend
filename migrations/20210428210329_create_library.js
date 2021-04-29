
exports.up = function(knex, Promise) {
  // User account stuff first
  return knex.schema
  .createTable('user_personal', function(users) {
    users.increments('user_id').primary();
    users.string('first_name');
    users.string('last_name');
    users.string('address')
    users.string('telephone_number')
  })
  
  .then(() => {
    return knex.schema
    .createTable('account_type', (at) =>{
      at.increments('at_id').primary()
      at.string('account_type_name')
    })
  })
  
  .then(() => {
    return knex.schema
    .createTable('user_account', (account) =>{
      account.increments('account_id').primary()
      account.string('user_name')
      //This needs to be revisited to figure out how to hash
      account.string('user_password')
      account.integer('user_id').notNullable()
      account.foreign('user_id').references('user_id').inTable('user_personal')
      account.integer('at_id').notNullable()
      account.foreign('at_id').references('at_id').inTable('account_type')
      
    })
  })
    //then books tables
    .then(() => {
      return knex.schema
      .createTable('genre', (genre)=>{
        genre.increments('genre_id').primary();
        genre.string('genre_name')
      })
    })
    
    .then(() => {
      return knex.schema
      .createTable('books', (books) =>{
        books.increments('books_id').primary()
        books.string('title')
        books.string('author')
        books.string('ISBN')
        books.string('front_cover_image')
        books.integer('genre_id').notNullable()
        books.foreign('genre_id').references('genre_id').inTable('genre')
      })
    })
    //Inventory

    .then(() => {
      return knex.schema
      .createTable('inv_status', (invstatus)=>{
        invstatus.increments('invstatus_id').primary()
        invstatus.string('inv_status_name')
      })
    })
    .then(() => {
      return knex.schema
      .createTable('inventory', (inv) =>{
        inv.increments('inv_id').primary()
        inv.integer('books_id').notNullable()
        inv.foreign('books_id').references('books_id').inTable('books')
        inv.integer('invstatus_id').notNullable
        inv.foreign()
      })
    })
    //Going to stop there. Current MVP will only show the inventory

  };

exports.down = function(knex) {
  return knex.schema
  .dropTable('inventory')
  .dropTable('inv_status')
  .dropTable('books')
  .dropTable('genre')
  .dropTable('user_account')
  .dropTable('account_type')
  .dropTable('user_personal')


};
