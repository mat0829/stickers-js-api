class Prize < ApplicationRecord
  # The user creating the prize
  belongs_to :prize_parent, foreign_key: :prizeGiverId, class_name: "User"

  # The user receiving the prize
  belongs_to :prize_child, foreign_key: :prizeReceiverId, class_name: "User"
  
  validates :name, :image, presence: true
end
