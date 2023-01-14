/**
 * @author perry.chouteau@epitech.eu
 * @copyright MIT
 * @version 1.0
 * @description express to grpc
 **/

//import * as colors from 'chalk';

'use strict'

/* api */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

/* style */
const colorize = require('json-colorizer');
const colors = require('chalk');

/* // not in use for now
//const yaml = require('js-yaml');
//const schema = require('protocol-buffers-schema');
*/

/* grpc-js */
const requiredGrpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const SIGN_PROTO_PATH = __dirname + '/proto/sign.proto';
var packageDefinition = protoLoader.loadSync(
    SIGN_PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var signProto = grpc.loadPackageDefinition(packageDefinition).sign;


//router
const routerDiscord = require('./router/discord');
const routerGithub = require('./router/github');
app.use('/discord', routerDiscord);
app.use('/github', routerGithub);

app.use('/sign', (req, res) => {
    signProto.sign(req, res);
    res.send('test');
});

/**
 * @description wrong adress
 * @param {string} req
 * @param {string} res
 * @returns {string} 404
 * @example http://localhost:3001/wrong_adress
 *
 */
app.use('*',(req, res) => {
    res.status(404).send(`<h1 style="font-size: 50px;">404 Not Found</h1>`);
});

app.listen(port, () => {
    console.log(colors.gray(`Server running on port ` + colors.greenBright(`${port}`) + `.`));
});

function sayHello(call, callback) {
    callback(null, {message: 'Hello ' + call.request.name});
}

function sayHelloAgain(call, callback) {
    callback(null, {message: 'Hello again, ' + call.request.name});
}

function main() {
    var server = new grpc.Server();
    server.addService(hello_proto.Greeter.service,
                        { sayHello: sayHello, sayHelloAgain: sayHelloAgain });
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(),
                    () => { server.start(); });
}