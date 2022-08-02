class Cart < ApplicationRecord
    validates :buyer_id, :med_id, :total_cost, :quantity, presence: true

    belongs_to :med,
        foreign_key: :med_id,
        class_name: :Medication

    belongs_to :user,
        foreign_key: :buyer_id,
        class_name: :User  
end
