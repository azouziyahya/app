express=require('express');
 routes=require("./routes/api");
 app=express();
app.use('/api',routes);

app.listen(process.env.port||5000,function () {
console.log('now listening for requests');
});
