class PostSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description, :price, :user_can_modify, :user_id

  def user_can_modify
    current_user.admin? || current_user == self.object.user
  end
 
 
  
end
