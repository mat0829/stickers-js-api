class Api::V1::TasksController < ApplicationController
  skip_before_action :authorized, only: [:create]
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
    @task = Task.new(task_params)
    @task.save
      render json: @task, status: 200
  end
  
  def update
    @task.update(task_params)
      render json: @task, status: 200
  end

  def destroy
    @task.delete
    render json: {taskId: @task.id}
  end

  private

    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:name, :value, :completed, :image, :taskGiverId, :taskReceiverId)
    end
end