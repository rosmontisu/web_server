const express = require('express'); // 라이브러리 요청
const app = express(); // 객체 생성

app.listen(8080, function(){
    console.log('listening on 8080')
}); // 서버 열기(port, 서버 띄운 후 실행할 코드)