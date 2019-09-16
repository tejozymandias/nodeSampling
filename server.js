const express = require('express');
const hbs = require('hbs');


var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
// res.send('<H1>Hello Express!</H1>');

res.send({
name:'Tony',
likes:[
    'gaming',
    'coding'
]

})
});

app.get('/about',(req,res)=> {
res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear: new Date().getFullYear()
});
});

app.get('/home',(req,res)=>{
res.render('home.hbs',{
    pageTitle:'Welcome',
    Ranger:'Aragorn'
});

});

app.get('/bad', (req,res)=>{
   res.send('Bad Request');
});

app.listen(3000,()=>{
    console.log('server is up on port 3000');
});
app.disable('etag'); 