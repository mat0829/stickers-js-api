class CreateStickers < ActiveRecord::Migration[6.0]
  def change
    create_table :stickers do |t|
      t.string :image
      #t.integer :stickers_count

      t.timestamps
    end
  end
end
