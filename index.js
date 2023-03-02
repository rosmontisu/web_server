const express = require('express');
const app = express();
const app2 = express();

//1. listen
//2. get(req, res)

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/test', function(req, res){
    res.send('/test에 응답 페이지')
});


app2.listen(5050, function(){
    console.log('5050')
});

app2.get('/test', function(req, res){
    res.send('app2 /test res')
});