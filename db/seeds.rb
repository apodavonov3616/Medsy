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
    username: 'Alisher',
    email: 'alisher@alisher.com',
    password: "password"
)
demo = User.create(
    id: 2,
    username: 'Demo User',
    email: "demo@gmail.com",
    password: "password"
)
user2 = User.create(
    id: 3,
    username: 'Dale F',
    email: 'DaleFritz@DaleFritz.com',
    password: "password"
)
 
user3 = User.create(
    id: 4,
    username: 'Ronald S',
    email: 'RonaldS@RonaldS.com',
    password: "password"
)
 
user4 = User.create(
    id: 5,
    username: 'Cameron V',
    email: 'cameronv@cameronv.com',
    password: "password"
)
 
user5 = User.create(
    id: 6,
    username: 'Linda H',
    email: 'LindaH@LindaH.com',
    password: "password"
)
 
user6 = User.create(
    id: 7,
    username: 'Harold M',
    email: 'HaroldMr@EHaroldM.com',
    password: "password"
)
 
user7 = User.create(
    id: 8,
    username: 'Bethany P',
    email: 'BethanyP@BethanyP.com',
    password: "password"
)
 
user8 = User.create(
    id: 9,
    username: 'Brooke B',
    email: 'BrookeB@BrookeB.com',
    password: "password"
)
 
user9 = User.create(
    id: 10,
    username: 'Patti E',
    email: 'PattiE@PattiE.com',
    password: "password"
)
 
user10 = User.create(
    id: 11,
    username: 'Scott W',
    email: 'ScottW@ScottW.com',
    password: "password"
)



medication1 = Medication.create(
    id: 1,
    seller_id: 10,
    name: "Excedrin 500mg",
    category_name: "Migraine/Headache",
    description: "An NSAID which not only blocks pain signals but also targets areas of inflammation to reduce swelling. Used for temporary relief of pain from migraines, headaches, menstrual cramps, and muscle aches.",
    price: 7.99
)

photo1 = URI.open("https://medsy-seed.s3.amazonaws.com/med1.jpeg")
medication1.photo.attach(io: photo1, filename:"photo1.jpg")

medication2 = Medication.create(
    id: 2,
    seller_id: 9,
    name: "Acetaminophen 500mg",
    category_name: "Migraine/Headache",
    description: "Analgesic which blocks the brain from receiving pain signals, Antipyretic which reduces fevers, used for relieving mild to moderate pain from headaches, migraines, colds, sore throats, and reduces fever.",
    price: 9.99
)

photo2 = URI.open("https://medsy-seed.s3.amazonaws.com/med2.jpeg")
medication2.photo.attach(io: photo2, filename:"photo2.jpg")


medication3 = Medication.create(
    id: 3,
    seller_id: 8,
    name: "Naproxen 500mg",
    category_name: "Migraine/Headache",
    description: "An NSAID which not only blocks pain signals but also targets areas of inflammation to reduce swelling, used for temporary relief of pain from migraines, headaches, menstrual cramps, and muscle aches.",
    price: 9.99
)
photo3 = URI.open("https://medsy-seed.s3.amazonaws.com/med3.jpg")
medication3.photo.attach(io: photo3, filename:"photo3.jpg")


medication4 = Medication.create(
    id: 4,
    seller_id: 7,
    name: "Ibuprofen 500mg",
    category_name: "Migraine/Headache",
    description: "An NSAID which not only blocks pain signals but also targets areas of inflammation to reduce swelling, used for temporary relief of pain from migraines, headaches, menstrual cramps, and muscle aches.",
    price: 13.99
)
photo4 = URI.open("https://medsy-seed.s3.amazonaws.com/med4.jpg")
medication4.photo.attach(io: photo4, filename:"photo4.jpg")


medication5 = Medication.create(
    id: 5,
    seller_id: 6,
    name: "Paracetamol 500mg",
    category_name: "Migraine/Headache",
    description: "Analgesic which blocks the brain from receiving pain signals, Antipyretic which reduces fevers, used for relieving mild to moderate pain from headaches, migraines, colds, sore throats, and reduces fever.",
    price: 9.99
)
photo5 = URI.open("https://medsy-seed.s3.amazonaws.com/med5.webp")
medication5.photo.attach(io: photo5, filename:"photo5.jpg")


medication6 = Medication.create(
    id: 6,
    seller_id: 5,
    name: "Aspirin 500mg",
    category_name: "Migraine/Headache",
    description: "Acetylsalicylic Acid/NSAID, known for broad range of pharmacologic activities such as have antipyretic, antiplatelet, and analgesic properties.",
    price: 11.99
)
photo6 = URI.open("https://medsy-seed.s3.amazonaws.com/med6.jpg")
medication6.photo.attach(io: photo6, filename:"photo6.jpg")


medication7 = Medication.create(
    id: 7,
    seller_id: 4,
    name: "Advil 200mg",
    category_name: "Migraine/Headache",
    description: "An NSAID which not only blocks pain signals but also targets areas of inflammation to reduce swelling, used for temporary relief of pain from migraines, headaches, menstrual cramps, and muscle aches.",
    price: 11.99
)
photo7 = URI.open("https://medsy-seed.s3.amazonaws.com/med7.jpg")
medication7.photo.attach(io: photo7, filename:"photo7.jpg")


medication8 = Medication.create(
    id: 8,
    seller_id: 3,
    name: "Diclofenac Gel",
    category_name: "Migraine/Headache",
    description: "An NSAID topical. Used for reducing inflammation, pain, and stiffness in the specific areas in the body. Works by blocking the production of prostaglandins which cause pain.",
    price: 13.99
)
photo8 = URI.open("https://medsy-seed.s3.amazonaws.com/med8.webp")
medication8.photo.attach(io: photo8, filename:"photo8.webp")


medication9 = Medication.create(
    id: 9,
    seller_id: 1,
    name: "Humulin N 100mL vial",
    category_name: "Diabetes",
    description: "An intermediate-acting synthetic insulin that has a slow release to last longer in the body when compared to regular human insulin to control blood sugar levels.",
    price: 79.99
)
photo9 = URI.open("https://medsy-seed.s3.amazonaws.com/med9.jpg")
medication9.photo.attach(io: photo9, filename:"photo9.jpg")


medication10 = Medication.create(
    id: 10,
    seller_id: 11,
    name: "Humulin R 10mL vial",
    category_name: "Diabetes",
    description: "A short-acting insulin that starts working in 30 minutes and lasts several hours to control blood sugar levels.",
    price: 59.99
)
photo10 = URI.open("https://medsy-seed.s3.amazonaws.com/med10.jpg")
medication10.photo.attach(io: photo10, filename:"photo10.jpg")


medication11 = Medication.create(
    id: 11,
    seller_id: 10,
    name: "Novolin N 10mL vial",
    category_name: "Diabetes",
    description: "An intermediate-acting synthetic insulin that has a slow release to last longer in the body when compared to regular human insulin to control blood sugar levels.",
    price: 59.99
)
photo11 = URI.open("https://medsy-seed.s3.amazonaws.com/med11.jpg")
medication11.photo.attach(io: photo11, filename:"photo11.jpg")


medication12 = Medication.create(
    id: 12,
    seller_id: 9,
    name: "Novolin R 10mL vial",
    category_name: "Diabetes",
    description: "A short-acting insulin that starts working in 30 minutes and lasts several hours to control blood sugar levels.",
    price: 59.99
)
photo12 = URI.open("https://medsy-seed.s3.amazonaws.com/med12.webp")
medication12.photo.attach(io: photo12, filename:"photo12.webp")


medication13 = Medication.create(
    id: 13,
    seller_id: 8,
    name: "Insulin Isophane 10mL vial",
    category_name: "Diabetes",
    description: "An intermediate-acting synthetic insulin that has a slow release to last longer in the body when compared to regular human insulin to control blood sugar levels.",
    price: 84.99
)
photo13 = URI.open("https://medsy-seed.s3.amazonaws.com/med13.jpg")
medication13.photo.attach(io: photo13, filename:"photo13.jpeg")


medication14 = Medication.create(
    id: 14,
    seller_id: 7,
    name: "Glucose Tablets (50 count)",
    category_name: "Diabetes",
    description: "Tablets that are fast-acting to replenish low blood sugar levels in the body to avoid risk of hypoglycemia.",
    price: 6.99
)
photo14 = URI.open("https://medsy-seed.s3.amazonaws.com/med14.jpeg")
medication14.photo.attach(io: photo14, filename:"photo14.jpeg")


medication15 = Medication.create(
    id: 15,
    seller_id: 6,
    name: "Vitamin B6 100mg (250 count)",
    category_name: "Seizure/Convulsions",
    description: "Vitamin B6 has been studied and concluded to be associated with functions of the immune, nervous, and endocrine systems. Deficiency in this vitamin may result in neurological disorders, including seizures. It has been studied that vitamin B6 can help control seizures, more specifically, pyridoxine-dependent epilepsies.",
    price: 12.99
)
photo15 = URI.open("https://medsy-seed.s3.amazonaws.com/med15.jpg")
medication15.photo.attach(io: photo15, filename:"photo15.jpg")


medication16 = Medication.create(
    id: 16,
    seller_id: 5,
    name: "Pyridoxine Injection 100mL vial",
    category_name: "Seizure/Convulsions",
    description: "Vitamin B6 has been studied and concluded to be associated with functions of the immune, nervous, and endocrine systems. Deficiency in this vitamin may result in neurological disorders, including seizures. It has been studied that vitamin B6 can help control seizures, more specifically, pyridoxine-dependent epilepsies.",
    price: 32.99
)
photo16 = URI.open("https://medsy-seed.s3.amazonaws.com/med16.jpg")
medication16.photo.attach(io: photo16, filename:"photo16.jpg")


medication17 = Medication.create(
    id: 17,
    seller_id: 4,
    name: "Magnesium Sulfate NaCl Injection 10mL vial",
    category_name: "Seizure/Convulsions",
    description: "Along with treating hypomagnesemia, these injections are used to prevent seizures in pregnant women with conditions including pre-eclampsia, eclampsia, or toxemia.",
    price: 39.99
)
photo17 = URI.open("https://medsy-seed.s3.amazonaws.com/med17.jpg")
medication17.photo.attach(io: photo17, filename:"photo17.jpg")


medication18 = Medication.create(
    id: 18,
    seller_id: 3,
    name: "Omeprazole 20mg (42 tablets)",
    category_name: "GERD",
    description: "A Proton-Pump Inhibitor which works by decreasing the amount of acid made in the stomach. Used to treat gastric and duodenal ulcers, esophagitis, and gastroesophageal reflux disease.",
    price: 15.99
)
photo18 = URI.open("https://medsy-seed.s3.amazonaws.com/med18.jpg")
medication18.photo.attach(io: photo18, filename:"photo18.jpg")


medication19 = Medication.create(
    id: 19,
    seller_id: 11,
    name: "Famotidine 20mg (50 tablets)",
    category_name: "GERD",
    description: "A Proton-Pump Inhibitor which works by decreasing the amount of acid made in the stomach. Used to treat gastric and duodenal ulcers, esophagitis, and gastroesophageal reflux disease.",
    price: 9.99
)
photo19 = URI.open("https://medsy-seed.s3.amazonaws.com/med19.jpeg")
medication19.photo.attach(io: photo19, filename:"photo19.jpeg")


medication20 = Medication.create(
    id: 20,
    seller_id: 10,
    name: "Prilosec 20mg (42 tablets)",
    category_name: "GERD",
    description: "A Proton-Pump Inhibitor which works by decreasing the amount of acid made in the stomach. Most commonly used to treat heartburn and prevent stomach acid from washing back into the esophagus.",
    price: 22.98
)
photo20 = URI.open("https://medsy-seed.s3.amazonaws.com/med20.jpg")
medication20.photo.attach(io: photo20, filename:"photo20.jpg")


medication21 = Medication.create(
    id: 21,
    seller_id: 9,
    name: "Pepcid 20mg (50 tablets)",
    category_name: "GERD",
    description: "Histamine-2 blocker which works by blocking the amount of acid the stomach produces. Used to treat and prevent ulcers of the stomach and intestines, and heartburn.",
    price: 20.99
)
photo21 = URI.open("https://medsy-seed.s3.amazonaws.com/med21.jpeg")
medication21.photo.attach(io: photo21, filename:"photo21.jpeg")


medication22 = Medication.create(
    id: 22,
    seller_id: 8,
    name: "Lansoprazole 30mg (28 capsules)",
    category_name: "GERD",
    description: "A Proton-Pump Inhibitor which works by decreasing the amount of acid made in the stomach. Used to treat gastric and duodenal ulcers, esophagitis, and gastroesophageal reflux disease.",
    price: 18.99
)
photo22 = URI.open("https://medsy-seed.s3.amazonaws.com/med22.png")
medication22.photo.attach(io: photo22, filename:"photo22.png")


medication23 = Medication.create(
    id: 23,
    seller_id: 7,
    name: "Esomeprazole Magnesium 40mg (100 tablets)",
    category_name: "GERD",
    description: "A Proton-Pump Inhibitor which works by decreasing the amount of acid made in the stomach. Most commonly used to treat heartburn and prevent stomach acid from washing back into the esophagus.",
    price: 19.99
)
photo23 = URI.open("https://medsy-seed.s3.amazonaws.com/med23.jpg")
medication23.photo.attach(io: photo23, filename:"photo23.jpg")


medication24 = Medication.create(
    id: 24,
    seller_id: 6,
    name: "Calcium Carbonate 500mg (250 tablets)",
    category_name: "GERD",
    description: "An inorganic salt and antacid which is primarily used in the treatment and prevention of low calcium conditions like GERD.",
    price: 14.99
)
photo24 = URI.open("https://medsy-seed.s3.amazonaws.com/med24.png")
medication24.photo.attach(io: photo24, filename:"photo24.png")


medication25 = Medication.create(
    id: 25,
    seller_id: 5,
    name: "Tums 1000mg (72 chewable tablets)",
    category_name: "GERD",
    description: "An Antacid used to treat and relieve heartburn, sour stomach, acid reflux, indigestion, and upset stomach.",
    price: 7.98
)
photo25 = URI.open("https://medsy-seed.s3.amazonaws.com/med25.jpeg")
medication25.photo.attach(io: photo25, filename:"photo25.jpeg")


medication26 = Medication.create(
    id: 26,
    seller_id: 4,
    name: "Benzyl Peroxide 10% Gel (60g)",
    category_name: "Acne",
    description: "A topical antibiotic solution that works by killing bacteria that causes acne.",
    price: 13.99
)
photo26 = URI.open("https://medsy-seed.s3.amazonaws.com/med26.jpg")
medication26.photo.attach(io: photo26, filename:"photo26.jpg")


medication27 = Medication.create(
    id: 27,
    seller_id: 3,
    name: "Differin 0.01% Gel (15g)",
    category_name: "Acne",
    description: "A topical retinoid that works to prevent growth of cells on the skin along with decreasing swelling and inflammation.",
    price: 16.99
)
photo27 = URI.open("https://medsy-seed.s3.amazonaws.com/med27.jpg")
medication27.photo.attach(io: photo27, filename:"photo27.jpg")


medication28 = Medication.create(
    id: 28,
    seller_id: 1,
    name: "Salicylic Acid 6% Wash (6 fl oz)",
    category_name: "Acne",
    description: "A topical keratolytic agent which is used to clear and prevent skin blemishes. Used to treat overgrowth of skin cells and help with with swelling and unplugging blocked pores.",
    price: 9.99
)
photo28 = URI.open("https://medsy-seed.s3.amazonaws.com/med28.png")
medication28.photo.attach(io: photo28, filename:"photo28.png")


medication29 = Medication.create(
    id: 29,
    seller_id: 11,
    name: "PanOxyl 4% Wash (150g)",
    category_name: "Acne",
    description: "A topical antibiotic solution that works by killing bacteria that causes acne.",
    price: 9.99
)
photo29 = URI.open("https://medsy-seed.s3.amazonaws.com/med29.jpg")
medication29.photo.attach(io: photo29, filename:"photo29.jpg")


medication30 = Medication.create(
    id: 30,
    seller_id: 10,
    name: "Acnomel 10% Cream (36g)",
    category_name: "Acne",
    description: "A tinted adult acne cream that clears up acne pimples and prevents new ones from forming. Also commonly used for Rosacea.",
    price: 14.99
)
photo30 = URI.open("https://medsy-seed.s3.amazonaws.com/med30.jpg")
medication30.photo.attach(io: photo30, filename:"photo30.jpg")


medication31 = Medication.create(
    id: 31,
    seller_id: 9,
    name: "Resinol 2% Cream (85.1g)",
    category_name: "Acne",
    description: "A topical analgesic and skin protectant which is used to treat pain and itching caused my minor cuts, scrapes, skin irritations, acne, eczema and other skin disorders.",
    price: 12.49
)
photo31 = URI.open("https://medsy-seed.s3.amazonaws.com/med31.png")
medication31.photo.attach(io: photo31, filename:"photo31.png")


medication32 = Medication.create(
    id: 32,
    seller_id: 8,
    name: "SAStid Soap Bar",
    category_name: "Acne",
    description: "A salicylic acid and sulfar bar most commonly used for calluses, acne, and blemishes. Works by killing bacteria on the skin. Sulfur helps to dry out the skin's surface to help absorb excess oil and sebum that cause acne breakouts.",
    price: 5.99
)
photo32 = URI.open("https://medsy-seed.s3.amazonaws.com/med32.jpg")
medication32.photo.attach(io: photo32, filename:"photo32.jpg")


medication33 = Medication.create(
    id: 33,
    seller_id: 7,
    name: "Levocetirizine 5mg (80 count)",
    category_name: "Allergies",
    description: "An antihistamine which works by blocking the substance in the body that causes allergic symptoms. Commonly used to relieve runny nose, sneezing, hives, and watery eyes during allergy season.",
    price: 14.99
)
photo33 = URI.open("https://medsy-seed.s3.amazonaws.com/med33.webp")
medication33.photo.attach(io: photo33, filename:"photo33.webp")


medication34 = Medication.create(
    id: 34,
    seller_id: 6,
    name: "Loratadine 10mg (100 tablets)",
    category_name: "Allergies",
    description: "An antihistamine which works by blocking the substance in the body that causes allergic symptoms. Commonly used to relieve symptoms of hay fever including allergy to dust and pollen. Also used to treat itching and redness caused by hives.",
    price: 14.99
)
photo34 = URI.open("https://medsy-seed.s3.amazonaws.com/med34.jpg")
medication34.photo.attach(io: photo34, filename:"photo34.jpg")


medication35 = Medication.create(
    id: 35,
    seller_id: 5,
    name: "Doxylamine 25mg (32 tablets)",
    category_name: "Allergies",
    description: "An antihistamine which works by blcoking the substance in the body that causes allergic symptoms. Helps relieves symptoms of allergy, hay fever, and the common cold. Can be used as a short-term sedative/sleep aid during night-time.",
    price: 6.99
)
photo35 = URI.open("https://medsy-seed.s3.amazonaws.com/med35.webp")
medication35.photo.attach(io: photo35, filename:"photo35.webp")


medication36 = Medication.create(
    id: 36,
    seller_id: 4,
    name: "Claritin 10mg (30 tablets)",
    category_name: "Allergies",
    description: "An antihistamine which works by blocking the substance in the body that causes allergic symptoms. Commonly used to relieve runny nose, sneezing, hives, and watery eyes during allergy season.",
    price: 19.99
)
photo36 = URI.open("https://medsy-seed.s3.amazonaws.com/med36.jpg")
medication36.photo.attach(io: photo36, filename:"photo36.jpg")


medication37 = Medication.create(
    id: 37,
    seller_id: 3,
    name: "Fexofenadine 30mg (100 tablets)",
    category_name: "Allergies",
    description: "An antihistamine which works by blocking the substance in the body that causes allergic symptoms. Most commonly used for symptoms of hay fever, including allergies to pollen and dust, and conjunctivitis.",
    price: 25.99
)
photo37 = URI.open("https://medsy-seed.s3.amazonaws.com/med37.jpg")
medication37.photo.attach(io: photo37, filename:"photo37.jpg")


medication38 = Medication.create(
    id: 38,
    seller_id: 1,
    name: "Azelastine Nasal Solution bottle",
    category_name: "Allergies",
    description: "An antihistamine nasal spray that is used to help relieve symptoms of runny, stuffy, or itchy nose, sneezing, and nasal drip.",
    price: 10.99
)
photo38 = URI.open("https://medsy-seed.s3.amazonaws.com/med38.png")
medication38.photo.attach(io: photo38, filename:"photo38.png")


medication39 = Medication.create(
    id: 39,
    seller_id: 1,
    name: "Ketotifen 5mL",
    category_name: "Allergies",
    description: "Antihistamine eye drops used to temporarily prevent itching of the eyes caused by animals, dust, or pollen.",
    price: 8.99
)
photo39 = URI.open("https://medsy-seed.s3.amazonaws.com/med39.jpeg")
medication39.photo.attach(io: photo39, filename:"photo39.jpeg")



