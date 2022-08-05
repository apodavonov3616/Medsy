class RecreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :buyer_id, null: false
      t.integer :medication_id, null: false
      t.integer :rating, null: false
      t.text :body
      t.timestamps
    end
  end
end
