@cart_meds.each do |cart_med|
    json.set! cart_med.id do 
        json.partial! '/api/cart_meds/cart_med', cart_med: cart_med
        json.name cart_med.med.name
        json.price cart_med.med.price
        json.photoUrl url_for(cart_med.med.photo)
    end
end