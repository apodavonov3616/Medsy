
json.partial! '/api/carts/cart', cart: @cart
json.name @cart.med.name
json.price @cart.med.price
json.photoUrl url_for(@cart.med.photo)