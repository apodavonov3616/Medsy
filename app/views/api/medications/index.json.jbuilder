@medications.each do |medication|
    json.set! medication.id do 
        json.extract! medication, :id, :name, :description, :price, :seller_id, :category_name
    end
end