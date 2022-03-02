puts "starting seeding"

user1 = User.create(username:"John")
user2 = User.create(username:"Susan")
user3 = User.create(username:"Philip")


cat1 = Category.create(category_type:"For Sale")
cat2 = Category.create(category_type:"Jobs")
cat3 = Category.create(category_type:"Free")

Post.create(item_name: "Old Bike", description:"rusty bike, still works", price: 50, image_url:"test", category_id: cat1.id, user_id: user1.id)
Post.create(item_name: "Couch", description:"Free couch", price: 0, image_url:"test", category_id: cat3.id , user_id: user2.id )
Post.create(item_name: "Web Developer", description:"Looking to hire a web dev to build a CL clone", price: 50, image_url:"test", category_id: cat2.id , user_id: user3.id )

puts "finished seeding"