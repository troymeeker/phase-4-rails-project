class UsersController < ApplicationController
 

  # GET /users
  def index
    users = User.all

    render json: users
  end

  # # GET /users/1
  # def show
  #   user = find_user
  #   render json: user
  # end

  # # POST /users
  # def create
  #   # user = User.create!(user_params)

  #   # if @user.save
  #   #   render json: @user, status: :created, location: @user
  #   # else
  #   #   render json: @user.errors, status: :unprocessable_entity
  #   # end
  # end

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

  # private

  #   # Use callbacks to share common setup or constraints between actions.
  #   def find_user
  #     User.find(params[:id])
  #   end

  #   # Only allow a list of trusted parameters through.
  #   def user_params
  #     params.permit()
  #   end
end
