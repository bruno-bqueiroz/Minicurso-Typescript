import express from 'express';
import { convertCLTToPJ } from './controllers/calculator-controller';
import { listAll, insert } from './controllers/jobs-controller';
const server = express();
server.use(express.json())

server.get('/health', (req, res) =>{
    res.send('ok');
})
server.get('/calculator', convertCLTToPJ);
 
server.get('/jobs', listAll); 
server.post('/jobs', insert);

server.listen (4000, ()=> console.log("Ta funfando....."));

export default server;