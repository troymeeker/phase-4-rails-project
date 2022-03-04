class User < ApplicationRecord
    
    has_many :posts
    has_many :categories, through: :posts
    has_secure_password 
    #macro, sets as pw digest & encrypt
    #validates pw
    validates :username, presence: true
   
end
