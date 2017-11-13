 express=require('express');
 router=express.Router();

router.get('/inventory',function (req,res) {
res.send({type:'GET'});
});

router.post('/inventory',function (req,res) {
    res.send({type:'POST'});
});

router.put('/inventory/:id',function (req,res) {
    res.send({type:'PUT id : '+req.params.id});
});

router.delete('/inventory/:id',function (req,res) {
    res.send({type:'DELETE id : '});
});
module.exports=router;