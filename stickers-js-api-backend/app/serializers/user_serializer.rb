class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :avatar, :points, :stickers, :prizes, :children, :parent_tasks, 
             :child_tasks, :logged_in

  def current_user
    self.object.id
  end

  def logged_in
    !!current_user
  end
end
