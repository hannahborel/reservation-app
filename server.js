const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);



app.listen(PORT, function(){
     console.log("App listening on PORT:" + PORT)
});