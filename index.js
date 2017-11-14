express = require('express');
routes = require('./routes/api');
bodyParser = require('body-parser');
mongoose = require('mongoose');
app = express();
mongoose.connect('mongodb://localhost/demo',{ useMongoClient: true });
//mongoose.createConnection('mongodb://127.0.0.1/demo', { useMongoClient: true });

mongoose.Promise=global.Promise;
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

app.use('/api', routes);




//For avoidong Heroku $PORT error
app.get('/', function (request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});
/*app.listen(process.env.port||5000,function () {
console.log('now listening for requests');
});*/
