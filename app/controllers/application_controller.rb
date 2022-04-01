class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :not_found


  
private 

  def current_user 
    @current_user ||= User.find_by_id(session[:user_id])
    # instance of @current_user if it exists already, or set it equal
  end

  def not_found(e)
    render json: { error: e.message }, status: :not_found

  end

  



end
