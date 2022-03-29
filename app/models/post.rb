class Post < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :category

  
    # join table for user/category
end
