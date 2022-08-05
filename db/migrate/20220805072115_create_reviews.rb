class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :buyer_id
      t.integer :medication_id
      t.integer :rating
      t.text :body
      t.timestamps
    end
  end
end
