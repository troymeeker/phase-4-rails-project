Rails.application.routes.draw do
  
  resources :categories, only:[:index, :show]
  resources :posts , only: [:index, :create, :destroy]
  
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # post "/posts", to: "posts#create"
 

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
