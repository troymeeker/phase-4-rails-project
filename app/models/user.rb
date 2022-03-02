class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :categories, through: :posts

end
