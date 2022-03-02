class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :item_name
      t.string :description
      t.integer :price
      t.string :image_url
      t.integer :category_id
      t.integer :user_id

      t.timestamps
    end
  end
end
