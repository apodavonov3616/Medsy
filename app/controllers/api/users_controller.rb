class Api::UsersController < ApplicationController

    # before_action :require_logged_in, only: [:show, :index]
    # skip_before_action :verify_authenticity_token
  
    def new
      @user = User.new
      render :new
    end
  
    def create
      @user = User.new(user_params)
      if @user.save
        login!(@user)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  
    def show
      @user = User.find(params[:id])
      if @user
        render :show
      else
        render json: @user.errors.full_messages, status: 404
      end
    end
  
    def index
      @users = User.all
      render :index
    end
  
    def edit
      @user = User.find(params[:id])
      render :edit
    end
  
    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        redirect_to api_user_url(@user)
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  
    def destroy
      @user = User.find(params[:id])
      if @user.destroy
        redirect_to api_users_url
      else
        render plain: "Unable to compute"
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:email, :username, :password)
    end
  end
  