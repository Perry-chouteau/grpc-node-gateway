const express = require('express');
const routerDiscord = express.Router();

routerDiscord.get('/', (req, res) => {
    res.send('Discord');
});



module.exports = routerDiscord;

