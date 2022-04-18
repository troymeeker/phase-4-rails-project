class Post < ApplicationRecord
    belongs_to :user
    belongs_to :category

  
    # join table for user/category
  
    # post inherits validations in a belongs to relationship

    validates :item_name, presence: true
    validates :description, presence: true

    def self.alpha
        self.order(:item_name)
    end

    



end
