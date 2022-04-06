puts "starting seeding"

user1 = User.create(username:"john", password:"testtest" )
user2 = User.create(username:"susan", password:"testtest")
user3 = User.create(username:"todd", password:"test")
user4 = User.create(username:"testadmin", password:"password", admin: true)
# user4 = User.create()


cat1 = Category.create(category_type:"Sporting Goods")
cat2 = Category.create(category_type:"Tools")
cat3 = Category.create(category_type:"Misc")
cat4 = Category.create(category_type:"Free")

Post.create(item_name: "Old Bike", description:"Rusty bike", price: 10, category_id: cat1.id, user_id: user1.id)
Post.create(item_name: "Couch", description:"Old couch", price: 0, category_id: cat3.id , user_id: user2.id, )
Post.create(item_name: "Table Saw", description:"Good condition Table saw", price: 200, category_id: cat2.id , user_id: user3.id )
Post.create(item_name: "Golf Clubs", description:"Great clubs, hardly used", price: 100, category_id: cat1.id, user_id: user1.id )
Post.create(item_name: "Shovel", description:"Basic Snow shovel", price: 10, category_id: cat2.id, user_id: user3.id )
Post.create(item_name: "Wood Pallets", description:"10 Pallets, good condition", price: 0, category_id: cat4.id, user_id: user2.id)
Post.create(item_name: "Book Shelf", description:"Huge book shelf", price: 50, category_id: cat3.id, user_id: user2.id)

puts "finished seeding"