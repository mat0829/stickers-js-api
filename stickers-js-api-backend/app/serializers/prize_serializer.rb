class PrizeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :cost, :purchased, :prizeGiverId, :prizeReceiverId, :prize_parent, :prize_child
end