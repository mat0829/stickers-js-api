
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

3.times do
  Task.create!(
      task_name: Faker::Lorem.sentence(rand(2..10)).chomp('.'),
      completed: false,
      sticker_value: Faker::Number.within(range: 1..100),
      task_giver_id: 1,
      task_receiver_id: 2
  )
end

system "clear"  
  puts "After seeding the database: "
  puts " - There are #{User.count} Users."
  puts " - There are #{Task.count} Tasks."
  puts ""