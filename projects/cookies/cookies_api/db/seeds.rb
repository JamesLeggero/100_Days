# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
    { name: "James Leggero", sig_rec: 1 },
    { name: "John Davis", sig_rec: 5 },
    { name: "Alex Yanovich", sig_rec: 3 },
    { name: "Cody Howard", sig_rec: 4 },
    { name: "Arthur Bernier Jr", sig_rec: 2 },
    { name: "Ira Herman", sig_rec: 8 },
    { name: "Ayla Ex", sig_rec: 6 },
    { name: "Paul Chapman", sig_rec: 7 }
])

Cookie.create([
    { name: "Chocolate Chip", nuts: true },
    { name: "Macadamia", nuts: true },
    { name: "Sugar", nuts: false },
    { name: "Lemon", nuts: false },
    { name: "Oatmeal Raisin", nuts: true },
    { name: "Gingerbread", nuts: false },
    { name: "Peanut Butter", nuts: true },
    { name: "Raspberry Thumbprint", nuts: false },
])