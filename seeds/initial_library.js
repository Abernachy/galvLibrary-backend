
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_personal').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_personal').insert(
        [
        {first_name: "Billy", last_name: "Madison", address: "123 Fake St",telephone_number: "123456775"},
        {first_name: "Gal", last_name: "Madison", address: "123 Fake St",telephone_number: "123456775"},
        {first_name: "Cassandra", last_name: "Madison", address: "123 Fake St",telephone_number: "123456775"},
        {first_name: "Shelly", last_name: "Madison", address: "123 Fake St",telephone_number: "123456775"}
      ]);
    })

    .then( () => {
      return knex('account_type').del()
    })
    .then( () => {
      return knex('account_type').insert(
        [
          {account_type_name: "Guest"},
          {account_type_name: "Member"},
          {account_type_name: "Admin"}
        ]);

    })

    .then( () => {
      return knex('user_account').del()
    })
    .then( () => {
      return knex('user_account').insert([
        {account_name: "BMadison", account_password: "123", user_id: 1, at_id:3},
        {account_name: "SMadison", account_password: "123", user_id: 4, at_id:2}
      ]);
    })

    .then( () => {
      return knex('genre').del()
    })
    .then( () => {
      return knex('genre').insert([
        {genre_name: "Horror"},
        {genre_name: "Religious"},
        {genre_name: "Fantasy"},
        {genre_name: "Sci-Fi"},
      ])
    })
    
    .then( () => {
      return knex('books').del()  
    })
    .then( () => {
      return knex('books').insert([
    
    {title:"Monster Hunter" ,author:"R.L. Stine", ISBN:123456 , genre_id:1  ,  front_cover_image: "https://bit.ly/32WMcNK" },
    
    {title:"Monster Hunter:The Sequel" ,author:"L.L. Stine", "ISBN":123456 , genre_id:2  ,  front_cover_image: "https://bit.ly/32WMcNK" },
        
    {title:"Hunter:The Reckoning" ,author:"R.L. Stine", "ISBN":123456 , genre_id:3  ,  front_cover_image: "https://bit.ly/32WMcNK" },
    
    {title:"Toddlers: Worse than Satan?" ,author:"J. Haddock", ISBN:123456 , genre_id:4 ,  front_cover_image: "https://bit.ly/32WMcNK" },
        
    {title:"The Italian Karate Robot From The Future Past",author:"G. Oladipo", ISBN:123456 , genre_id:1  , front_cover_image: "https://bit.ly/32WMcNK" },
    
    {title:"Secrets of the UFO Keepers and Government Lies" ,author:"Z. Mansell", ISBN:123456 , genre_id:2  ,  front_cover_image: "https://bit.ly/32WMcNK" }
  ])
})

  .then( () => {
    return knex('inv_status').del()
  })
  .then( () => {
    return knex('inv_status').insert([
      {inv_status_name: "Available"},
      {inv_status_name: "Not-Available"}
    ])
  })

  .then( () => {
    return knex('inventory').del()
  })
  .then( () => {
    return knex('inventory').insert([
      {books_id:1, invstatus_id:1}, 
      {books_id:1, invstatus_id:2},
      {books_id:2, invstatus_id:1},
      {books_id:2, invstatus_id:1},
      {books_id:1, invstatus_id:2},
      {books_id:2, invstatus_id:2},
      {books_id:2, invstatus_id:1},
      {books_id:5, invstatus_id:2},
      {books_id:3, invstatus_id:2},
      {books_id:3, invstatus_id:1},
      {books_id:4, invstatus_id:2},
      {books_id:5, invstatus_id:1},
      {books_id:6, invstatus_id:2},
      {books_id:6, invstatus_id:1},
    ])
  })
    
  };


