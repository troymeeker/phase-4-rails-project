class UsersController < ApplicationController
 rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
 
 skip_before_action :is_authorized, only: [:show, :create]

  def show
    if current_user 
      render json: current_user, status: :ok
    else
      render json: { error: "No active session"}, status: :unauthorized
    end
  end

  # POST /signup
  def create
    user = User.create(user_params) 
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :ok
    else 
      render json: { error: "user must have a username and password" }, status: :unprocessable_entity
    end
  end



  private

    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
end
