class UpdateReviewsColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :buyer_name, :string

    add_index :reviews, :buyer_name
  end
end
