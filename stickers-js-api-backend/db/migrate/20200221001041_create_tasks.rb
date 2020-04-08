class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :value
      t.boolean :completed, default: false
      t.string :image
      t.integer :taskGiverId
      t.integer :taskReceiverId
      t.string :stickerImage

      t.timestamps
    end
  end
end
