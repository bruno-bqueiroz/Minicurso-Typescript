import express from 'express';
import { convertCLTToPJ } from './controllers/calculator-controller.js';
import { listAll, insert } from './controllers/jobs-controller.js';
const server = express();
server.get('/health', (req, res) =>{
    res.send('ok');
})
server.get('/calculator', convertCLTToPJ);
 server.get('/jobs', listAll); 
//server.get('/jobs', insert);

server.listen (4000, ()=> console.log("Ta funfando....."));
