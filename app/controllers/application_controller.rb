class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
 
  before_action :is_authorized

  

  def current_user 
    @current_user ||= User.find_by_id(session[:user_id])
    # instance of @current_user if it exists already, or set it equal
  end

  def not_found(e)
    render json: { error: e.message }, status: :not_found

  end



  def is_authorized

    authorized = current_user.admin? || @post.user_id == current_user.id
    render json: {error: "You are not authorized for this action"}, status: :unauthorized unless authorized
 
  end
  
end
