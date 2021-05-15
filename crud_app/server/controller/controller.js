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
    if (req.query.id){
        const id=req.query.id;
        userdb.findById(id)
        .then(user=>{
            if(!user){
                res.status(404).send({message:'not found user with id'})
            }else{
                res.send(user)
            }
        }).catch(err=>{
            res.status(500).send({message:err.message||"err while retrivinguser information."})
        })
    }else{
        userdb.find()
        .then(users=>{
            res.send(users)
        }).catch(err=>{
            res.status(500).send({message:err.message||"err while retrivinguser information."})
        })
    }
}
exports.update=(req,res)=>{
    if(!req.body){
        return res
            .status(400).send({message:":id is empty"})
    }

    const id = req.params.id;
    userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot update because ${id} not found.`});
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({message:"err while update information."})
    })
}
exports.delete=(req,res)=>{
    const id = req.params.id;
    userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot delete with id:${id}`})
        }else {
            res.send({message:'user was deleted successfully'})
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"somethin error while delete user by id"
        })
    })
}
