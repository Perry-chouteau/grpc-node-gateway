const routerGithub = require('express').Router();

routerGithub.get('/', (req, res) => {
    res.send('Github');
});



module.exports = routerGithub;