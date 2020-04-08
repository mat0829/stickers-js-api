class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :completed, :image, :taskGiverId, :taskReceiverId, :stickerImage, :parent, :child
  
  def parent
    self.object.parent_user.name
  end

  def child
    self.object.child_user.name
  end
end
