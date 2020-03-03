class TaskSerializer < ActiveModel::Serializer
  attributes :id, :task_name, :completed, :sticker_value
   # :task_giver_id, :task_receiver_id
end
