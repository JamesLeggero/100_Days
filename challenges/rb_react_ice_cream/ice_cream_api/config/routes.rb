Rails.application.routes.draw do
  resources :pints, only: [:index, :create, :update, :destroy]
  resources :ice_creams, only: [:index, :show] do
    resources :pints
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
