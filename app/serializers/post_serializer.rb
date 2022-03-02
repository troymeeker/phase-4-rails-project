class PostSerializer < ActiveModel::Serializer
  attributes :item_name, :description, :price, :category_id, :user_id
end
