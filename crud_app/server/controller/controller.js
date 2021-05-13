const userdb = require('../model/model');

exports.create=(req,res)=>{
    //console.log(`in model.create-${req.body.name}`) //왜안됨?
    //TypeError: Cannot convert object to primitive value 에러남

    if(!req.body){
        res.status(400).send({message:"req.body is empty"});
        return;
    }

    const user=new userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    user.save(user)
    .then(data=>{
        //res.send(data)
        res.redirect("/add-user")
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"error while creating a create operation"})})
}
exports.find=(req,res)=>{
    userdb.find()
    .then(users=>{
        res.send(users)
    }).catch(err=>{
        res.status(500).send({message:err.message||"err while retrivinguser information."})
    })
}
exports.update=(req,res)=>{
    
}
exports.delete=(req,res)=>{
    
}
