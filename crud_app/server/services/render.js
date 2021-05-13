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
    res.render('update_user.ejs')
}