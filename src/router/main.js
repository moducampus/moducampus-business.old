const url = require('url');

module.exports = (app) => {
    app.get('/',(req,res)=>{
        res.render('index.html')
    });

    app.get('/assets/*',(req,res)=>{
        /*
            TODO:
            url로 입력받은 path로 이미지 파일 접근
        */
    })
}