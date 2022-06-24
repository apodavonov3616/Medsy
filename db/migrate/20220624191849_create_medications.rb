class CreateMedications < ActiveRecord::Migration[5.2]
  def change
    create_table :medications do |t|
      t.integer :seller_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.decimal :price, null: false
      t.string :image_url

      t.timestamps
    end

    add_index :medications, :seller_id
    add_index :medications, :name
  end
end
