const { urlencoded } = require('express');
const express = require('express');

const testData = {
    name : 'james',
    password : '12345'
};

const app = express();
//what is this doing
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>get work</h1>');
});

app.post('/signin', (req, res) => {
    console.log(req.body.name);
    if(req.body.name === testData.name && req.body.password === testData.password) {
        res.send('sussce login');
    }
    else{
        res.status(400);
        res.send('wrongz');
    }
    
});

app.post('/register', (req, res) => {
    
});

app.listen(3000, ()=> {
    console.log("sever work!");
});