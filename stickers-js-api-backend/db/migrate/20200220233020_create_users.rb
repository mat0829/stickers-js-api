class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :avatar
      t.integer :points, default: '0'
      t.text :stickers, array: true, default: []
      t.text :prizes, array: true, default: []

      t.timestamps
    end
  end
end
