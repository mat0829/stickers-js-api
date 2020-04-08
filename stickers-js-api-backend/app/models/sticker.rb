class Sticker < ApplicationRecord
  has_many :users, through: :tasks
  has_many :task_stickers
  has_many :tasks, through: :task_stickers
end
