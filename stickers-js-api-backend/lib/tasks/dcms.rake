namespace :db do
  desc 'Drop, Create, Migrate, Seed db, Start rails server'
  task dcms: :environment do
    puts 'dropping db...'
    Rake::Task['db:drop'].invoke

    puts 'creating db...'
    Rake::Task['db:create'].invoke

    puts 'migrating db...'
    Rake::Task['db:migrate'].invoke

    puts 'seeding db...'
    Rake::Task['db:seed'].invoke

    puts 'starting Rails server'
    exec('rails s')
  end
end