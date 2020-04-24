class PrizeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :cost, :purchased, :prizeGiverId, :prizeReceiverId, :prizeParent, :prizeChild

  def prizeParent
    self.object.prize_parent.name
  end

  def prizeChild
    self.object.prize_child.name
  end
end