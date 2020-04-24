class Task < ApplicationRecord
  # The user creating the task
  belongs_to :task_parent, foreign_key: :taskGiverId, class_name: "User"

  # The user receiving the task
  belongs_to :task_child, foreign_key: :taskReceiverId, class_name: "User"
  
  validates :name, :image, presence: true
end
