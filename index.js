var express=require('express');
var app = express();

let bodyParser=require('body-parser');
app.use(express.static('login_v17'))

app.use(bodyParser.urlencoded({extend:true}));
app.get('/',function (req,res) {
    res.sendFile(__dirname + '/login_v17/index.html');
});


app.post('/login',function (request,response) {
    let username=request.body.username;
    let password=request.body.pass;
    response.send('Chao nguoi dung: '+username);



});
app.listen(1002,function () {

});