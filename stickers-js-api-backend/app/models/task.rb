class Task < ApplicationRecord
  # The user creating the task
  #belongs_to :parent_user, foreign_key: :task_giver_id, class_name: "User"

  # The user receiving the task
  #belongs_to :child_user, foreign_key: :task_receiver_id, class_name: "User"
end
