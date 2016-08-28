var express = require('express');
var massive = require('massive');
var bodyParser = require('body-parser');
var cors = require('cors');
var connectionString = 'postgres://MichaelDavis@localhost/front_to_back_dono'


var app = module.exports = express();

var massiveInstance = massive.connectSync({
  connectionString: connectionString,
  scripts: './db'
});
app.set('db', massiveInstance);
var db = app.get('db');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));


//get all products
app.get('/products', function(req, res, next){
  console.log('what');
  db.get_all_products(function(err, products){
    res.status(200).json(products);
  });
});

//find particular product
app.get('/products/:name', function(req, res, next){
  db.get_product_by_name(req.params.name, function (err, product){
    res.status(200).send(product);
  });
})

// app.get('/test',function(req,res,next){
//   res.status(200).send('yay');
// }); END POINT

//create product
app.post('/products', function(req,res,next){
  // console.log(req.body);
  db.add_product_to_inventory([req.body.name, req.body.description,req.body.price, req.body.type],function(err, products){
    res.status(200).send('it was good');
  })
})
//update product
app.put('/products/:id', function(req,res,next){

})
//delete product
app.delete('/products/:id', function(req,res,next){
  db.delete_product_from_inv(req.params.id, function(err, response){
    res.status(200).send('it was good');
  });
});


app.listen(4040, function(){
console.log('listening')

});
