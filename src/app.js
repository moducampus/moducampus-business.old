require('dotenv').config()

// 외장모듈
const express = require('express')

const app = express()
const router = require('./router/main');
// 라우터 설정

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/assets', express.static('assets'));
app.use(router);


app.listen(3001, () => {
  console.log("Express server has started on port 3001")
});

/*
CYJ
TODO:
- [x] ejs코드가 돌아가도록 서버사이드 렌더링을 시작하기
*/


