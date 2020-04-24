class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :completed, :image, :taskGiverId, :taskReceiverId, :stickerImage, :taskParent, :taskChild
  
  def taskParent
    self.object.task_parent.name
  end

  def taskChild
    self.object.task_child.name
  end
end
