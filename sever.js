const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>get work</h1>');
})

app.listen(3000, ()=> {
    console.log("sever work!");
});