class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :completed, :image, :taskGiverId, :taskReceiverId, :stickerImage, :task_parent, :task_child
end
