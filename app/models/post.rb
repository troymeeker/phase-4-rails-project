class Post < ApplicationRecord
    belongs_to :user
    belongs_to :category

    validates_presence_of :user, :category 
end
