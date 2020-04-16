class Task < ApplicationRecord
  # The user creating the task
  belongs_to :parent_user, foreign_key: :taskGiverId, class_name: "User"

  # The user receiving the task
  belongs_to :child_user, foreign_key: :taskReceiverId, class_name: "User"
  
  validates :name, :image, presence: true
end
