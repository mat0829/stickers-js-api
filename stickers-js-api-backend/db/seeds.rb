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

child_user = User.create!(
  name: 'Wookie',
  email: 'meow@email.com',
  password: 'password',
  avatar: 'https://previews.123rf.com/images/alexutemov/alexutemov1608/alexutemov160800980/61881092-cute-animal-cat-head-emotion-vector-avatar-cartoon-happy-cat-kitty-animal-emotion-expression-isolate.jpg'
)

Task.create!(
  name: "Get straight A's on your Report Card",
  value: '500',
  image: 'https://i.pinimg.com/originals/e6/5d/86/e65d86af554c7faabc16684669edfa76.png',
  taskGiverId: '1',
  taskReceiverId: '4',
  stickerImage: 'https://i.pinimg.com/736x/b5/62/7b/b5627bd17db63bf4821bb14f976101e8.jpg'
)

Task.create!(
  name: 'Do the dishes',
  value: '20',
  image: 'https://c.stocksy.com/a/24x700/z9/1895342.jpg?1575844750',
  taskGiverId: '1',
  taskReceiverId: '2',
  stickerImage: 'https://i.pinimg.com/736x/b5/62/7b/b5627bd17db63bf4821bb14f976101e8.jpg'
)

Task.create!(
  name: 'Feed the animals',
  value: '5',
  image: 'https://www.theinternetpetvet.com/wp-content/uploads/2014/09/dog-cat-feeding.jpg',
  taskGiverId: '3',
  taskReceiverId: '2',
  stickerImage: 'https://i.pinimg.com/736x/b5/62/7b/b5627bd17db63bf4821bb14f976101e8.jpg'
)

10.times do 
  Sticker.create!([{ image: 'https://i.pinimg.com/736x/b5/62/7b/b5627bd17db63bf4821bb14f976101e8.jpg'}, 
    { image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/3215981/original/great-job-1024x978/accept-a-tip-for-exceptional-service.jpg' }, 
    { image: 'http://files.ctctcdn.com/b1220ad5001/ed4ccebb-ac8c-4819-8465-ce711d50eb71.jpg?a=1123800181382'},
    { image: 'https://i.pinimg.com/736x/b5/62/7b/b5627bd17db63bf4821bb14f976101e8.jpg'},
    { image: 'https://i.pinimg.com/736x/b5/62/7b/b5627bd17db63bf4821bb14f976101e8.jpg'},
    { image: 'https://i.pinimg.com/736x/b5/62/7b/b5627bd17db63bf4821bb14f976101e8.jpg'},
    { image: 'https://i.pinimg.com/736x/b5/62/7b/b5627bd17db63bf4821bb14f976101e8.jpg'}])
end

system "clear"  
  puts "After seeding the database: "
  puts " - There are #{User.count} Users."
  puts " - There are #{Task.count} Tasks."
  puts " - There are #{Sticker.count} Stickers."
  puts ""