class UsersController < ApplicationController
 rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
 

  # def index
  #   users = User.all
  #   render json: users
  # end

  # GET /me
   # user = find_by(id: session[:user_id])
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
      render json: {error: user.errors}, status: :unprocessable_entity
    end
    
  end

  # # PATCH/PUT /users/1
  # def update
  #   # if @user.update(user_params)
  #   #   render json: @user
  #   # else
  #   #   render json: @user.errors, status: :unprocessable_entity
  #   # end
  # end

  # # DELETE /users/1
  # def destroy
  #   user = find_user
  #   user.destroy
  # end

  private

  # def render_unprocessable_entity(exception)
  #     render json: {error: exception.invalid.record.errors}, status: :unprocessable_entity

  # end

  #   # Use callbacks to share common setup or constraints between actions.
    # def find_user
    #   User.find(params[:id])
    # end

    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
end
