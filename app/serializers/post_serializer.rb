class PostSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description, :price, :category_id
  
end
