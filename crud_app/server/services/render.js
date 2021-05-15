const { default: axios } = require('axios');
const axi=require('axios');

exports.homeRoutes = (req,res)=>{
    axi.get("http://localhost:3000/api/users")
    .then(function(response){res.render('index',{Users:response.data})})
    .catch(err=>{res.send({message:err.message})})
}

exports.add_user = (req,res)=> {
    res.render('add_user.ejs')
}

exports.update_user = (req,res)=> {
    axi.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
    .then(function(userdata){res.render('update_user.ejs',{user:userdata.data})})
    .catch(err=>{res.send(err)})
}