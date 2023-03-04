const express = require('express');
const app = express();

//1. listen
//2. get(req, res)

app.listen(8080, function(){
    console.log('listening on 8080')
});



app.get('/test', function(req, res){
    res.send('/test에 응답 페이지')
}); 

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
}); 