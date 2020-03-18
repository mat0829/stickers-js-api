class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :completed, :image, :taskGiverId, :taskReceiverId
end
