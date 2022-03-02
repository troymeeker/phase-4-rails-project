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
  # def create
  #   post = Post.create!(post_params)

  #   if @post.save
  #     render json: @post, status: :created, location: @post
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /posts/1
  # def update
  #   if @post.update(post_params)
  #     render json: @post
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /posts/1
  # def destroy
  #   post = find_post
  #   post.destroy
  # end

  # private

  #   # Use callbacks to share common setup or constraints between actions.
  #   def find_post
  #    Post.find(params[:id])
  #   end

  #   # Only allow a list of trusted parameters through.
  #   def post_params
  #     params.permit()
  #   end
end
