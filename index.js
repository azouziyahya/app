express=require('express');
 routes=require("./routes/api");
 app=express();
app.use('/api',routes);
app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
/*app.listen(process.env.port||5000,function () {
console.log('now listening for requests');
});*/
