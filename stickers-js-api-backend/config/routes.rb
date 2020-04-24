Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :tasks
      resources :task_images
      resources :stickers
      resources :prizes
      resources :prize_images
      resources :users, only: [:create, :update, :destroy]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end
end
