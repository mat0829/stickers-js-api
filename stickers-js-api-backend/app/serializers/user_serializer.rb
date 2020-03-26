class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :avatar, :token, :children

  def children
    self.object.children.uniq.map do |child|
      name = child.name
    end
  end
end
