class PostSerializer < ActiveModel::Serializer
  attributes :item_name, :description, :price, :category_id
     has_one :user
    # has_one :category
    # user and category not necessary for return data
end
