class Api::V1::PrizesController < ApplicationController
  before_action :set_prize, only: [:show, :update, :destroy]

  def index
    if !current_user.parent_prizes.empty?
      @prizes = current_user.parent_prizes
    elsif !current_user.child_prizes.empty?
      @prizes = current_user.child_prizes
    end
    render json: @prizes, status: 200
  end

  def show
    render json: @prize, status: 200
  end

  def create
    @prize = current_user.parent_prizes.build(prize_params)
    @prize.name = @prize.name.titleize
    if @prize.save
      render json: @prize, status: 200
    else
      render json: { :errors => @prize.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  def update
    if @prize.update(prize_params)
      render json: @prize, status: 200
    else
      render json: { :errors => @prize.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @prize.delete
    render json: {prizeId: @prize.id}
  end

  private

  def set_prize
    if current_user.parent_prizes.exists?
      @prize = current_user.parent_prizes.find(params[:id])
    else
      @prize = current_user.child_prizes.find(params[:id])
    end
  end

  def prize_params
    params.require(:prize).permit(:name, :image, :cost, :purchased, :prizeGiverId, :prizeReceiverId)
  end
end