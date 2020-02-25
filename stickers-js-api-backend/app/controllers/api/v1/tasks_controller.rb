class Api::V1::TasksController < ApplicationController

  def index
    @tasks = Task.all
    render json: @tasks, status: 200
  end

  def show
    @task = Task.find(id: params[:id])
    render json: @task, status: 200
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task, status: 200
    else
      render json: @task.errors
    end
  end
  
  def update
    @task = Task.find(id: params[:id])
    if @task.update(task_params)
      render json: @task, status: 200
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @task = Task.find(id: params[:id])
    @task.delete
    render json: {taskId: @task.id}
  end

  private

    def task_params
      params.require(:task).permit(:task_name, :completed, :sticker_value, 
                                   :task_giver_id,:task_receiver_id)
    end
end