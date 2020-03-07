class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.integer :task_value
      t.boolean :completed, default: false
      #t.integer :task_giver_id
      #t.integer :task_receiver_id

      t.timestamps
    end
  end
end
