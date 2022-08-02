class Medication < ApplicationRecord

    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: :User

    has_one_attached :photo

    has_many :carts,
        foreign_key: :med_id,
        class_name: :Cart
end
