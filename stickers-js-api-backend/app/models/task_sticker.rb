class TaskSticker < ApplicationRecord
  belongs_to :task
  belongs_to :sticker
end
