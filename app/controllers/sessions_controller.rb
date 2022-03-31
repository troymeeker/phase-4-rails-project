class SessionsController < ApplicationController
    skip_before_action :is_authorized, only: [:create]
   
    #post '/login'
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            #session is stored, logging user in
            render json: user, status: :ok
        else
            render json: { errors: {login: "Invalid username or password"} }, status: :unauthorized
        end

    end

    #delete '/logout'
    def destroy
        session.delete(:user_id)
        # session is deleted, logging user out
    end

  
    
end
