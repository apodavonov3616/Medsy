class Api::UsersController < ApplicationController

    # before_action :require_logged_in, only: [:show, :index]
    # skip_before_action :verify_authenticity_token
  
    def index
        @users = User.all
        render 'api/users/index'
    end
    
    def show
        @user = User.find(params[:id])
        render 'api/users/show'
    end
    
    def create
        debugger
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

  private

  def user_params
      params.require(:user).permit(:username, :password, :email)
  end
end
  