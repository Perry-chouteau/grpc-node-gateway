const express = require('express');
const routerSign = express.Router();

routerSign.get('/', (req, res) => {
    res.send('Sign - you lost your way?');
});

routerSign.get('up', (req, res) => {
    res.send('Sign up');
});
routerSign.get('in', (req, res) => {
    res.send('Sign in');
});
routerSign.get('out', (req, res) => {
    res.send('Sign out');
});

module.exports = routerSign;

