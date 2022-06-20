class Api::UsersController < ApplicationController

    # before_action :require_logged_in, only: [:show, :index]
    # skip_before_action :verify_authenticity_token
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Input']
    end

  def show
      @user = User.find_by(id: params[:id])
      render :show
  end

  private

  def user_params
      params.require(:user).permit(:username, :password, :email)
  end
end
  