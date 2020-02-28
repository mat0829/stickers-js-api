class TaskSerializer < ActiveModel::Serializer
  attributes :id, :task_name
   #:sticker_value, :completed, :task_giver_id, :task_receiver_id
end
