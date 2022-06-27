json.extract! @medication, :id, :name, :category_name, :seller_id, :description, :price
json.photoUrl url_for(@medication.photo) if @medication.photo.attached?

