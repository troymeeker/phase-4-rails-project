Rails.application.routes.draw do
  
  resources :categories, only:[:index, :show]
  resources :posts , only: [:index, :show, :create, :update, :destroy]
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/posts_by_price", to: "posts#posts_by_price"
  get "/posts_by_order", to: "posts#order"

  # get "/users", to: "users#index"


  # get "/item_name/:search", to: "posts#search"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
