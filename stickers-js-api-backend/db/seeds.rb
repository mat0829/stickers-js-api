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


Sticker.create!([{ image: 'https://i.imgur.com/NvN2Njw.jpg'}, 
  { image: 'https://i.imgur.com/E724FDn.jpg'}, 
  { image: 'https://i.imgur.com/JMELk8q.jpg'},
  { image: 'https://i.imgur.com/zZeKExN.jpg'},
  { image: 'https://i.imgur.com/ZTFAbko.jpg'},
  { image: 'https://i.imgur.com/U6Jun0U.jpg'},
  { image: 'https://i.imgur.com/2YEbXew.jpg'},
  { image: 'https://i.imgur.com/zXQvSoc.jpg'},
  { image: 'https://i.imgur.com/MoVJB8h.jpg'},
  { image: 'https://i.imgur.com/LebLlnW.jpg'},
  { image: 'https://i.imgur.com/DHMeLzz.jpg'},
  { image: 'https://i.imgur.com/GxehdUk.jpg'},
  { image: 'https://i.imgur.com/5Ei0RmY.jpg'},
  { image: 'https://i.imgur.com/2IJTUve.jpg'},
  { image: 'https://i.imgur.com/BlhkTR1.jpg'},
  { image: 'https://i.imgur.com/5zWcg98.jpg'},
  { image: 'https://i.imgur.com/kTH8oXW.jpg'},
  { image: 'https://i.imgur.com/r3ZmdAZ.jpg'},
  { image: 'https://i.imgur.com/3uqPJlg.jpg'},
  { image: 'https://i.imgur.com/zzpiZVU.jpg'},
  { image: 'https://i.imgur.com/iaaJ9T7.jpg'},
  { image: 'https://i.imgur.com/onEYPdc.jpg'},
  { image: 'https://i.imgur.com/QINuBBI.jpg'},
  { image: 'https://i.imgur.com/23r1JNd.jpg'},
  { image: 'https://i.imgur.com/pAOtsA4.jpg'},
  { image: 'https://i.imgur.com/uWA1yft.jpg'},
  { image: 'https://i.imgur.com/va7Oyyd.jpg'},
  { image: 'https://i.imgur.com/F86CLbA.jpg'},
  { image: 'https://i.imgur.com/TALmCnA.jpg'},
  { image: 'https://i.imgur.com/eK1vJw7.jpg'},
  { image: 'https://i.imgur.com/yOZoLMn.jpg'},
  { image: 'https://i.imgur.com/PMxMdrm.jpg'},
  { image: 'https://i.imgur.com/w3JPRi8.jpg'},
  { image: 'https://i.imgur.com/NZiBD88.jpg'},
  { image: 'https://i.imgur.com/2jAjFDU.jpg'}])

  #{ image: ''}

system "clear"  
  puts "After seeding the database: "
  puts " - There are #{User.count} Users."
  puts " - There are #{Task.count} Tasks."
  puts " - There are #{Sticker.count} Stickers."
  puts ""