class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  # before_action :authorized


  def current_user 
    User.find_by(id: session[:user_id])
  end

  def not_found(e)
    render json: { error: e.message }, status: :not_found

  end

  # def authorized
  #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  # end

end
