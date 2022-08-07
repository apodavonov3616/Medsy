class Review < ApplicationRecord
    validates :buyer_id, :medication_id, :rating, presence: true
    validates :rating, numericality: { greater_than_or_equal_to: 1, less_than: 6 }


    belongs_to :buyer, 
        foreign_key: :buyer_id, 
        class_name: :User

    belongs_to :medication, 
        foreign_key: :medication_id, 
        class_name: :Medication

end
