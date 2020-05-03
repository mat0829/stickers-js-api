class Api::V1::TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy]

  def index
    if !current_user.parent_tasks.empty?
      @tasks = current_user.parent_tasks
    elsif !current_user.child_tasks.empty?
      @tasks = current_user.child_tasks
    end
    render json: @tasks, status: 200
  end

  def show
    render json: @task, status: 200
  end

  def create
    @task = current_user.parent_tasks.build(task_params)
    @task.name = @task.name.titleize
    if @task.save
      render json: @task, status: 200
    else
      render json: { :errors => @task.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  def update
    if @task.update(task_params)
      render json: @task, status: 200
    else
      render json: { :errors => @task.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @task.delete
    render json: {taskId: @task.id}
  end

  private

  def set_task
    if current_user.parent_tasks.exists?
      @task = current_user.parent_tasks.find(params[:id])
    else
      @task = current_user.child_tasks.find(params[:id])
    end
  end

  def task_params
    params.require(:task).permit(:name, :value, :completed, :image, :taskGiverId, :taskReceiverId, :stickerImage)
  end
end