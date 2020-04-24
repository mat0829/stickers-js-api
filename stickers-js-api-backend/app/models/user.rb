class User < ApplicationRecord
  has_secure_password
  
  # Will return an array of tasks from the task_parent instance
  has_many :parent_tasks, foreign_key: :taskGiverId, class_name: "Task"
  
  # Will return an array of tasks for the task_child instance
  has_many :child_tasks, foreign_key: :taskReceiverId, class_name: "Task"

  # Will return an array of children who have tasks through the task_parent instance
  has_many :children, through: :parent_tasks, source: :task_child

  # Will return an array of prizes from the task_parent instance
  has_many :parent_prizes, foreign_key: :prizeGiverId, class_name: "Prize"
  
  # Will return an array of prizes for the task_child instance
  has_many :child_prizes, foreign_key: :prizeReceiverId, class_name: "Prize"
  
  validates :name, :email, :password, presence: true
  validates :name, uniqueness: true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
end