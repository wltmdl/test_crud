const express = require('express')
//require('dotenv').config();       // 아래 config 표현과 아래 require() 을 동시 대체 가능
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')        // node 에 기본 설치된 모듈 이라 npm i 필요없음
const bp = require('body-parser')

const app = express()

//dotenv.config( {path: '../config.env'} )          // server.js 파일과 동일선상이 아닌 상위에 config.env 가 있을 경우
dotenv.config( {path: 'config.env'} )
const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')   // 'html' or 'pug'
app.set('views',path.resolve(__dirname,'views/ejs'))  // views 위치 지정 하는법. views 하위 폴더로 ejs 전용 폴더를 만든다면 사용. 아니면 이 표현 필요 없음

//log request       // tiny: GET / 200 - - 0.5 ms
app.use(morgan('tiny'))

//request to body-parser


app.use('/css',express.static(path.resolve(__dirname,"assets/css")))    // assets/css 폴더에 있는 파일을 가져오게 함

app.get('/', (req,res)=>{res.render('index.ejs')})  // views 가 views/ejs 를 보기 때문에 확장자 적지 않아도 됨

app.listen(PORT,()=>{console.log(`running, http://localhost:${PORT}`)})