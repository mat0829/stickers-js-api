class TasksController < ApplicationController

  def index
    tasks = Task.all
    render json: tasks
  end

  def show
    task = Task.find_by(id: params[:id])
    render json: task
  end

  def create
      task = Task.create(task_name: task_name, completed: false, sticker_value: value, user_id: params[:id])
      render json: task
    end
  end

  def destroy
    task = Task.find_by(id: params[:id]);
    task.destroy;
    render json: task
  end
end