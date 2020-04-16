class CreateTaskImages < ActiveRecord::Migration[6.0]
  def change
    create_table :task_images do |t|
      t.string :imageUrl

      t.timestamps
    end
  end
end
