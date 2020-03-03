class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.boolean :completed, default: true
      t.integer :sticker_value
      #t.integer :task_giver_id
      #t.integer :task_receiver_id

      t.timestamps
    end
  end
end
