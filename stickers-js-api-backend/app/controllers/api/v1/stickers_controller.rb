class Api::V1::StickersController < ApplicationController
  before_action :set_sticker, only: [:show, :update, :destroy]

  def index
      @stickers = Sticker.all
    render json: @stickers, status: 200
  end

  def show
    render json: @sticker, status: 200
  end

  def create
    @sticker = current_user.stickers.build(sticker_params)
    if @sticker.save
      render json: @sticker, status: 200
    else
      render json: { :errors => @sticker.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  def update
    if @sticker.update(sticker_params)
      render json: @sticker, status: 200
    else
      render json: { :errors => @sticker.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @sticker.delete
    render json: {stickerId: @sticker.id}
  end

  private

  def set_sticker
    @sticker = current_user.stickers.find(params[:id])
  end

  def sticker_params
    params.require(:sticker).permit(:image, :value) #:stickers_count
  end
end