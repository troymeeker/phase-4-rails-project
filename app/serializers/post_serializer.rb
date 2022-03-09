class PostSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description, :price, :category_id
  has_one :user
  has_one :category
end
