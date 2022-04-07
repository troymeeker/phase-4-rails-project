class User < ApplicationRecord
    
    has_many :posts
    has_many :categories, through: :posts
    has_secure_password 

   
    validates :username, presence: true, uniqueness: true, length: { minimum: 3 }
    
    
 
   
end
