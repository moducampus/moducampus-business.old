// 외장모듈
const express = require('express')

const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('assets'));

app.listen(3001, () => {
  console.log("Express server has started on port 3001")
});

/*

CYJ
TODO:
- [] 정적인 파일 로드할 수 있도록하기 url: /assets/*
- [] ejs코드가 돌아가도록 서버사이드 렌더링을 시작하기

*/
