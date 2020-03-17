class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :completed, :image
   # :task_giver_id, :task_receiver_id
end
