class Api::V1::PrizeImagesController < ApplicationController
  before_action :set_prize_image, only: [:show, :update, :destroy]

  def index
      @prize_images = PrizeImage.all
    render json: @prize_images, status: 200
  end

  def show
    render json: @prize_image, status: 200
  end

  def create
    @prize_image = current_user.prize_images.build(prize_image_params)
    if @prize_image.save
      render json: @prize_image, status: 200
    else
      render json: { :errors => @prize_image.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  def update
    if @prize_image.update(prize_image_params)
      render json: @prize_image, status: 200
    else
      render json: { :errors => @prize_image.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @prize_image.delete
    render json: {prizeImageId: @prize_image.id}
  end

  private

  def set_prize_image
    @prize_image = current_user.prize_images.find(params[:id])
  end

  def prize_image_params
    params.require(:prize_image).permit(:imageUrl)
  end
end