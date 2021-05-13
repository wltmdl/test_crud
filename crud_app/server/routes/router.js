const express = require('express')
const route = express.Router()
const service = require('../services/render')

const userdb = require('../controller/controller')

route.get('/', service.homeRoutes)  // views 가 views/ejs 를 보기 때문에 확장자 적지 않아도 됨

route.get('/add-user', service.add_user)
route.get('/update-user', service.update_user)

//API
route.post('/api/users',userdb.create);
route.get('/api/users',userdb.find);
route.put('/api/users/:id',userdb.update);
route.delete('/api/users/:id',userdb.delete);

module.exports = route