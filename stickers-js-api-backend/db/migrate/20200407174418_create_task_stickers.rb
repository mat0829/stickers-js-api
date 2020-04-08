class CreateTaskStickers < ActiveRecord::Migration[6.0]
  def change
    create_table :task_stickers do |t|
      t.integer :task_id
      t.integer :sticker_id

      t.timestamps
    end
  end
end
