Rails.application.routes.draw do
  
  	resources :microposts
  	
  	resources :users

  	#get "users", to:"users#index"

  	#get "users/:id", to:"users#show"

  	#post "users", to:"users#create"

	#put "users/:id", to:"users#update"

	#patch "users/:id", to:"users#update"

	#delete "users/:id", to:"users#destroy"

	root "users#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
