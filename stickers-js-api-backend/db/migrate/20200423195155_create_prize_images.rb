class CreatePrizeImages < ActiveRecord::Migration[6.0]
  def change
    create_table :prize_images do |t|
      t.string :imageUrl

      t.timestamps
    end
  end
end
