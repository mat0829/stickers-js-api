class UsersController < ApplicationController
    
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  def create
      user = User.create(name: name, email: email)
      render json: user
    end
  end

  def destroy
    user = User.find_by(id: params[:id]);
    user.destroy;
    render json: user
  end
end