
parent_user = User.create!(
    name: Faker::Name.first_name,
    email: 'parent@example.com',
    password: 'password',
    img: Faker::Avatar.image
  )

child_user = User.create!(
    name: Faker::Name.first_name,
    email: 'child@example.com',
    password: 'child',
    img: Faker::Avatar.image
)


Task.create!(
  name: "Get straight A's on your Report Card",
  value: '500',
  image: 'https://i.pinimg.com/originals/e6/5d/86/e65d86af554c7faabc16684669edfa76.png'
  #task_giver_id: 1,
  #task_receiver_id: 2
)

Task.create!(
  name: 'Do the dishes',
  value: '20',
  image: 'https://c.stocksy.com/a/24x700/z9/1895342.jpg?1575844750'
  #task_giver_id: 1,
  #task_receiver_id: 2
)

Task.create!(
  name: 'Feed the animals',
  value: '5',
  image: 'https://www.theinternetpetvet.com/wp-content/uploads/2014/09/dog-cat-feeding.jpg'
  #task_giver_id: 1,
  #task_receiver_id: 2
)

system "clear"  
  puts "After seeding the database: "
  puts " - There are #{User.count} Users."
  puts " - There are #{Task.count} Tasks."
  puts ""