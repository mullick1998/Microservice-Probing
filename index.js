'use strict'
const express = require('express');
const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

app.get("/short/:arg", (req, res) => {
    if (req.params.arg.length == 2)
        res.send(`{"uid":"${makeid(32)}"}`);
    else
        res.send(`try again with 2 Alphanumeric digit`);
});

app.get("/long/:arg", (req, res) => {
    if (req.params.arg.length == 3)
        res.send(`{"uid":"${makeid(32)}"}`);
    else
        res.send(`try again with 3 Alphanumeric digit`);
});

app.listen(PORT,HOST, ()=>{
        console.log(`Running on http://${HOST}:${PORT}`);
});