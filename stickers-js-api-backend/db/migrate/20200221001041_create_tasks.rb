class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :value
      t.boolean :completed, default: false
      t.string :image
      #t.integer :task_giver_id
      #t.integer :task_receiver_id

      t.timestamps
    end
  end
end
