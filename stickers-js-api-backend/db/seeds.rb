
parent_user = User.create!(
  name: 'Mat',
  email: 'parent@email.com',
  password: 'password',
  avatar: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
)

child_user = User.create!(
  name: 'Meeyu',
  email: 'meow@email.com',
  password: 'password',
  avatar: 'https://previews.123rf.com/images/lar01joka/lar01joka1806/lar01joka180600036/102460124-isolated-cute-cat-avatar.jpg'
)

parent_user = User.create!(
    name: 'Lirit',
    email: 'child@example.com',
    password: 'password',
    avatar: 'https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400022/75406270-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg'
)


Task.create!(
  name: "Get straight A's on your Report Card",
  value: '500',
  image: 'https://i.pinimg.com/originals/e6/5d/86/e65d86af554c7faabc16684669edfa76.png',
  taskGiverId: '1',
  taskReceiverId: '2'
)

Task.create!(
  name: 'Do the dishes',
  value: '20',
  image: 'https://c.stocksy.com/a/24x700/z9/1895342.jpg?1575844750',
  taskGiverId: '1',
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