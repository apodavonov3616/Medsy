class Medication < ApplicationRecord

    belongs_to :seller,
        foreign_key: :user_id,
        class_name: :User

    has_one_attached :photo
end
