class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :buyer_id
      t.integer :total_cost, null: false
      t.integer :quantity, null: false 
      t.integer :med_id

      t.timestamps
    end

    add_index :carts, :buyer_id
    add_index :carts, :med_id
  end
end
