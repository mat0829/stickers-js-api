class Api::V1::UsersController < ApplicationController
    
  def index
    @users = User.all
    render json: @users, status: 200
  end

  def show
    @user = User.find(id: params[:id])
    render json: @user, status: 200
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: 200
    else
      render json: @user.errors
    end
  end
  
  def update
    @user = User.find(id: params[:id])
    if @user.update(user_params)
      render json: @user, status: 200
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(id: params[:id])
    @user.delete
    render json: {userId: @user.id}
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password, :img)
    end
end