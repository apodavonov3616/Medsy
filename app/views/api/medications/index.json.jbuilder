@medications.each do |medication|
    json.set! medication.id do 
        json.extract! medication, :id, :name, :description, :price, :seller_id, :category_name
        json.seller medication.seller, :username
        json.photoUrl url_for(medication.photo) if medication.photo.attached?
    end
end