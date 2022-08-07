Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json } do
    resources :users, only:[:create, :show]
    resource :session, only:[:create, :destroy]
    resources :medications, only: [:index, :show] do 
      resources :reviews, only: [:index, :create]
    end
    resources :cart_meds, only: [:index, :create, :show, :destroy, :update]
    resources :reviews, only: [:update, :destroy]
  end

  root "static_pages#root"
end
