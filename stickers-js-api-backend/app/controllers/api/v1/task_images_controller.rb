class Api::V1::TaskImagesController < ApplicationController
  before_action :set_task_image, only: [:show, :update, :destroy]

  def index
      @task_images = TaskImage.all
    render json: @task_images, status: 200
  end

  def show
    render json: @task_image, status: 200
  end

  def create
    @task_image = current_user.task_images.build(task_image_params)
    if @task_image.save
      render json: @task_image, status: 200
    else
      render json: { :errors => @task_image.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  def update
    if @task_image.update(task_image_params)
      render json: @task_image, status: 200
    else
      render json: { :errors => @task_image.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @task_image.delete
    render json: {taskImageId: @task_image.id}
  end

  private

  def set_task_image
    @task_image = current_user.task_images.find(params[:id])
  end

  def task_image_params
    params.require(:task_image).permit(:imageUrl)
  end
end