class PostsController < ApplicationController
  
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :is_authorized, only: [:update, :destroy]
  

  # GET /posts
  def index
    posts = Post.all
    render json: posts
  end

  # # GET /posts/1
  def show
    render json: @post
  end

  # # POST /posts
  def create
    post = current_user.posts.create(post_params)
    
    if post.id
      render json: post, include:['category'], status: :created
    else
      render json:{error: post.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

  # # PATCH /posts/1
  def update
   
    if @post
      @post.update(post_params)
      render json: @post, status: :accepted
    else
      render json: @post.errors, status: :not_found
    end
  end

  # # DELETE /posts/1
  def destroy
    @post.destroy
    # head :no_content
  end

  #get 
  def posts_by_price
    posts = Post.order(:price)
    render json: posts
  end

  #get
  def order
    posts = Post.order(:item_name)
    render json: posts
  end




  private   
    #  Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit( :item_name, :description, :price, :category_id, :user_id)
    end

    #only for actions with id in their route
    def set_post
     @post = Post.find(params[:id])
    end
  
    def is_authorized
     
      is_authorized = current_user.admin? || current_user.id == @post.user_id
      render json: { error: "You are not authorized for this action" }, status: :forbidden unless is_authorized

    end
  

end
