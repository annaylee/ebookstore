const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', (req, res, next)=>{
    res.render('index');
});

app.use((req, res, next)=>{
    res.redirect('/index');
});

app.listen(process.env.PORT || 3000);


