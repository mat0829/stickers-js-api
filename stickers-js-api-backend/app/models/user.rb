class User < ApplicationRecord
  has_secure_password

  # Will return an array of tasks from the parent_user instance
  has_many :parent_tasks, foreign_key: :task_giver_id, class_name: "Task"
  
  # Will return an array of tasks for the child_user instance
  has_many :child_tasks, foreign_key: :task_receiver_id, class_name: "Task"

  # Will return an array of children who have tasks through the parent_user instance
  has_many :children, through: :parent_tasks, source: :child_user
end