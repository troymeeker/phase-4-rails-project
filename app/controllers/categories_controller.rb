class CategoriesController < ApplicationController


  # GET /categories
  def index
    categories = Category.all

    render json: categories
  end

  # # GET /categories/1
  def show
    category = find_category
    render json: category
  end

  

 

  private
  #   # Use callbacks to share common setup or constraints between actions.
    def find_category
       Category.find(params[:id])
    end

 
end
