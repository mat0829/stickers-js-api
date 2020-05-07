class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  before_action :set_user, only: [:show, :update, :destroy]

  def show
    render json: @user, status: 200
  end

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { :errors => @user.errors.full_messages }, status: :not_acceptable
    end
  end
  
  def update
    if @user.update(user_params)
      render json: @user, status: 200
    else
      render json: { :errors => @user.errors.full_messages }, status: :not_acceptable
    end
  end

  def destroy
    @user.delete
    render json: {userId: @user.id}
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :avatar, :points, stickers: [], prizes: [])
  end
end