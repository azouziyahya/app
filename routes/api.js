express = require('express');
router = express.Router();
var request = require('request');

var MyUser = require('../models/products');
//var conn = mongoose.createConnection('mongodb://localhost/demo', { useMongoClient: true });
var url = "https://live.icecat.biz/api/?UserName=YahyaAzouzi&Language=en&GTIN=";
router.get('/inventory/:code', function (req, res) {
    console.log(url);
    request({url: url + req.params.code, json: true}, function (error, response, body) {
        if (error) {
            console.log('unable to fetch product . ');
            console.log
        }
        else if (body.data != undefined) {
            //console.log(JSON.stringify(body,null,2));

            res.send(body.data.GeneralInfo);
        }
        else {
            res.send("product not found on this server !!");
        }


    });


});

router.post('/inventory', function (req, res) {
    //console.log(req.body);
    //var user=new User(req.body);

    //user = conn.model('User', new User(req.body));
    console.log(req.body);


    var user = new MyUser(req.body);
    user.save(function (err, response) {
        if (err) {
            res.json(err);
        } else {
            res.send({result: user});
        }
    });


});

router.put('/inventory/:id', function (req, res) {
    res.send({type: 'PUT id : ' + req.params.id});
});

router.delete('/inventory/:id', function (req, res) {
    res.send({type: 'DELETE id : '});
});
module.exports = router;