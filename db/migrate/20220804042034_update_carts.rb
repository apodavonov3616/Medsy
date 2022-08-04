class UpdateCarts < ActiveRecord::Migration[5.2]
  def change
    rename_table :carts, :cart_meds
  end
end
