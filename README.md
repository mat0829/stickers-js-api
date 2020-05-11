# Stickers

Stickers is meant to be a fun and colorful Application for Parents to create Tasks for Children to complete. Upon completion of the Tasks the Children are rewarded with digital Stickers to add to their Stickers Collection, and Sticker Points which they can use to purchase Prizes created for them by their Parents.

## Installation

1. Fork the repository and clone it.
2. Run `bundle install` to install gems (If you don't have bundler, first run `gem install bundler`)
3. Set up the database with `rake db:migrate`.
4. Run `rake db:seed` to create the 160 Task Images, 163 Stickers, and the 60 Prizes required for the Application to work     correctly.
5. Run `Rails s` to start the application and copy and paste the created url from the terminal into a new window.
6. Open Index.html in stickers-js-api-frontend.
7. Be sure to create both Adult and Child Users on the same computer to save them properly for Task and Prize creation.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/mat0829/stickers-js-api. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The application is available as open source under the terms of the [MIT License](https://github.com/mat0829/stickers-js-api/blob/master/LICENSE).