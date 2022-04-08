class User < ApplicationRecord
    
    has_many :posts
    has_many :categories, through: :posts
    has_secure_password 

   
    validates :username, presence: true, uniqueness: true, length: { minimum: 3 }

    # def self.most_posts
    #     User.preload(:posts).all.max_by{|user| user.posts.size}
    #     User.all.max_by{|user| user.posts.size}
    # end
    
    
 
   
end
