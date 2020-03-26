class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :avatar, :token, :children, :parent_tasks, :child_tasks

  def children
    self.object.children.uniq.map do |child|
     name = " " + child.name
    end
  end

  def parent_tasks
    self.object.parent_tasks.uniq.map do |task|
      name = " " + task.name
    end
  end

  def child_tasks
    self.object.child_tasks.uniq.map do |task|
      name = " " + task.name
    end
  end
end
