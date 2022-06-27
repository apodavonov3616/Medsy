# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Medication.destroy_all
user1 = User.create(
    id: 1,
    username: 'alisher',
    email: 'alisher@alisher.com',
    password: "password"
)
demo = User.create(
    id: 2,
    username: 'Demo User',
    email: "demo@gmail.com",
    password: "password"
)

medication1 = Medication.create(
    id: 1,
    seller_id: 1,
    name: "Ibuprofen",
    category_name: "NSAID",
    description: "Ibuprofen is used to help relieve mild to moderate pain.",
    price: 6.99
)
image1 = URI.open("https://medsy-seed.s3.amazonaws.com/ibuprofen.jpg")
medication1.photo.attach(io: image1, filename:"image1.jpg")

