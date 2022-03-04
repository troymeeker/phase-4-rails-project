class User < ApplicationRecord
    
    has_many :posts
    has_many :categories, through: :posts
    has_secure_password
    validates_presence_of :username
   
end
