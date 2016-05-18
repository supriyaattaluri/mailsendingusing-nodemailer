
var express = require('express');

var path = require('path');
var morgan = require('morgan');
var cons = require('consolidate');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config');


var nodemailer = require("nodemailer");

var app = express();




var mongoose = require('mongoose');
mongoose.connect(config.database, function(err, db) {
    if (err) {
        console.log(err);
    }
    console.log("shopDB: connected at 2016");
});

require('./model/product')(mongoose);
require('./model/category')(mongoose);
require('./model/brand')(mongoose);
require('./model/subcategory')(mongoose);
require('./model/user')(mongoose);
require('./model/order')(mongoose);
require('./model/shipping')(mongoose);


app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

var mailsending= require('./routes/mailsending');
app.use('/sendmail', mailsending);

var product = require('./routes/rproduct');
app.use('/product', product);

var category = require('./routes/rcategory');
app.use('/category', category);

var brand = require('./routes/rbrand');
app.use('/brand', brand);

var subcategory = require('./routes/rsubcategory');
app.use('/subcategory', subcategory);


var user = require('./routes/ruser');
app.use('/user', user);

var order = require('./routes/rorder');
app.use('/order', order);

var shipping = require('./routes/rshipping');
app.use('/shipping', shipping);

app.listen(2016);
