
parent_user = User.create!(
    name: Faker::Name.first_name,
    email: 'parent@example.com',
    password: 'password',
    avatar: Faker::Avatar.image
  )

child_user = User.create!(
    name: Faker::Name.first_name,
    email: 'child@example.com',
    password: 'password',
    avatar: Faker::Avatar.image
)

test_user = User.create!(
  name: 'Mat',
  email: 'email@email.com',
  password: 'password',
  avatar: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
)


Task.create!(
  name: "Get straight A's on your Report Card",
  value: '500',
  image: 'https://i.pinimg.com/originals/e6/5d/86/e65d86af554c7faabc16684669edfa76.png',
  taskGiverId: '3',
  taskReceiverId: '2'
)

Task.create!(
  name: 'Do the dishes',
  value: '20',
  image: 'https://c.stocksy.com/a/24x700/z9/1895342.jpg?1575844750',
  taskGiverId: '3',
  taskReceiverId: '2'
)

Task.create!(
  name: 'Feed the animals',
  value: '5',
  image: 'https://www.theinternetpetvet.com/wp-content/uploads/2014/09/dog-cat-feeding.jpg',
  taskGiverId: '3',
  taskReceiverId: '2'
)

system "clear"  
  puts "After seeding the database: "
  puts " - There are #{User.count} Users."
  puts " - There are #{Task.count} Tasks."
  puts ""