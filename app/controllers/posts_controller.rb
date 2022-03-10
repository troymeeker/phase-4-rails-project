class PostsController < ApplicationController
 

  # GET /posts
  def index
    posts = Post.all
    render json: posts
  end

  # # GET /posts/1
  # def show
  #   post = find_post
  #   render json: post
  # end

  # # POST /posts
  def create
    post = Post.create(post_params)
    
    if post
      render json: post, status: :created
    else
      render json: {error: "render error here"}
    end
  end

  # # PATCH /posts/1
  # def update
  #   post = Post.find(params[:id])
  #   if post.update(post_params)
  #     render json: post, status: :ok
  #   else
  #     render json: post.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /posts/1
  def destroy
    post = find_post
    post.destroy
  end

  private

  #   # Use callbacks to share common setup or constraints between actions.
    def find_post
     Post.find(params[:id])
    end

  #   # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:item_name, :description, :price, :category_id)
    end
end
