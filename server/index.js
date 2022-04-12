const express = require('express')
var cors = require("cors");
const Mongo  = require("mongodb").MongoClient
const app = express()
const port = 5000
app.use(cors());
let uri = "mongodb+srv://umer:niko12345@cluster0.5i8um.mongodb.net/humchat?retryWrites=true&w=majority"
let username
let passward
let oldPassward
app.use(express.json())
app.get('/hello', (req, res) => {

  Mongo.connect(uri, (err, db)=> {
		if (err) throw err;
		let dbo = db.db("dashboard");
		dbo.collection("login").find({}).toArray(function(err, result) {
		  if (err) throw err;
		  res.send(result);
		  db.close();
		});
	  });
})

app.post('/send', (req, res) => {
  console.log(req.body)
   username = req.body.username
   oldPassward = req.body.oldPassward
   passward = req.body.passward
   
Mongo.connect(uri, function(err, db) {
	if (err) throw err;
	else{
		console.log('you are connceted')
	}
	var dbo = db.db("dashboard");
	var myquery = { passward : oldPassward };
	var newvalues = { $set: {username: "ummigamez@gmail.com", passward : passward } };
	dbo.collection("login").updateOne(myquery, newvalues, function(err, res) {
	  if (err) throw err;
	  console.log("document updated");
	  db.close();
	});
  })
})

app.get('/manage_orders',(req,res)=>{

	  Mongo.connect(uri, (err, db)=> {
		if (err) throw err;
		let dbo = db.db("dashboard");
		dbo.collection("manage_orders").find({}).toArray(function(err, result) {
		  if (err) throw err;
		  res.send(result);
		  db.close();
		});
	  });

})


app.post('/get_manage_request',(req,res)=>{

   const name = req.body.name
   const Meal = req.body.Meal
   const order_num = req.body.order_num
   const drink =  req.body.drink
   const myobj = { name , Meal , order_num , drink };


   Mongo.connect(uri, function(err, db) {
	if (err) throw err;
	var dbo = db.db("dashboard");
	dbo.collection("stagging").insertOne(myobj, function(err, res) {
	  if (err) throw err;
	  console.log("document inserted");
	  var dbo = db.db("dashboard");
	 var myquery = { order_num: order_num };
	 dbo.collection("manage_orders").deleteOne(myquery, function(err, obj) {
	   if (err) throw err;
	   console.log("1 document deleted");
	   db.close();
	 });
	});
	
	
  });
}
)
app.post('/get_stagging_request',(req,res)=>{

	const name = req.body.name
	const Meal = req.body.Meal
	const order_num = req.body.order_num
	const drink =  req.body.drink
	const myobj = { name , Meal , order_num , drink };
 
 
	Mongo.connect(uri, function(err, db) {
	 if (err) throw err;
	 var dbo = db.db("dashboard");
	 dbo.collection("delivered").insertOne(myobj, function(err, res) {
	   if (err) throw err;
	   console.log("document inserted");
	   var dbo = db.db("dashboard");
	   var myquery = { order_num: order_num };
	   dbo.collection("stagging").deleteOne(myquery, function(err, obj) {
		 if (err) throw err;
		 console.log("1 document deleted");
		 db.close();
	   });
	 });
	 
	 
   });

	

 }
 )


app.get('/send_to_stagging', (req, res) => {

	Mongo.connect(uri, (err, db)=> {
		  if (err) throw err;
		  let dbo = db.db("dashboard");
		  dbo.collection("stagging").find({}).toArray(function(err, result) {
			if (err) throw err;
			res.send(result);
			db.close();
		  });
		});
  })


app.post('/delete_Derlivery_Data',(req,res)=>{
   const Order_num =  req.body.order_num


   Mongo.connect(uri, function(err, db) {
	if (err) throw err;
	var dbo = db.db("dashboard");
	var myquery = { order_num: Order_num };
	dbo.collection("delivered").deleteOne(myquery, function(err, obj) {
	  if (err) throw err;
	  console.log("1 document deleted");
	  db.close();
	});
  });
})

app.get('/send_to_derlivery', (req, res) => {

	Mongo.connect(uri, (err, db)=> {
		  if (err) throw err;
		  let dbo = db.db("dashboard");
		  dbo.collection("delivered").find({}).toArray(function(err, result) {
			if (err) throw err;
			res.send(result);
			db.close();
		  });
		});
  })


app.post('/delete_tables',(req,res)=>{
	const Order_num =  req.body.order_num
 
 
	Mongo.connect(uri, function(err, db) {
	 if (err) throw err;
	 var dbo = db.db("dashboard");
	 var myquery = { order_num: Order_num };
	 dbo.collection("manage_orders").deleteOne(myquery, function(err, obj) {
	   if (err) throw err;
	   console.log("1 document deleted");
	   db.close();
	 });
   });
 })

 app.post('/delete_stagging',(req,res)=>{
	const Order_num =  req.body.order_num
 
 
	Mongo.connect(uri, function(err, db) {
	 if (err) throw err;
	 var dbo = db.db("dashboard");
	 var myquery = { order_num: Order_num };
	 dbo.collection("stagging").deleteOne(myquery, function(err, obj) {
	   if (err) throw err;
	   console.log("1 document deleted");
	   db.close();
	 });
   });
 })
 app.post('/add_products', (req, res) => {
	let product_name = req.body.product_name
	let price = req.body.price
	let url = req.body.url
	let description = req.body.description
	let product_id = req.body.product_id
	const myobj = { product_name  , price , url, description , product_id };

	Mongo.connect(uri, function(err, db) {
		if (err) throw err;
		var dbo = db.db("dashboard");
		dbo.collection("menu").insertOne(myobj, function(err, res) {
		  if (err) throw err;
		  console.log("document inserted");
	
		});
		
		
	  });
  })

app.get('/menu',(req,res)=>{
	Mongo.connect(uri, (err, db)=> {
		if (err) throw err;
		let dbo = db.db("dashboard");
		dbo.collection("menu").find({}).toArray(function(err, result) {
		  if (err) throw err;
		  res.send(result);
		  db.close();
		});
	  });
}) 

app.post('/all_product_delete',(req,res)=>{
	const product_id =  req.body.product_id
 
 
	Mongo.connect(uri, function(err, db) {
	 if (err) throw err;
	 var dbo = db.db("dashboard");
	 var myquery = { product_id : product_id };
	 dbo.collection("menu").deleteOne(myquery, function(err, obj) {
	   if (err) throw err;
	   console.log("1 document deleted");
	   db.close();
	 });
   });
 })

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})