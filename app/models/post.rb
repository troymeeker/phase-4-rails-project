class Post < ApplicationRecord
    belongs_to :user
    belongs_to :category

    # validates_presence_of :item_name, :description, :price, :category_id 
end
