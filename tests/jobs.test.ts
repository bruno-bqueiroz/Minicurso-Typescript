import server from "../src/app";
import supertest from 'supertest';

const api = supertest(server);

describe ('Testando API',  ()=>{
    it('Testando GET: /jobs', async()=>{
       const resultado = await api.get('/jobs');
       console.log(resultado)
       expect(resultado.status).toBe(200)
       expect(resultado.body).toEqual(expect.arrayContaining([expect.objectContaining({
        title: expect.any(String),
        salary: expect.any(Number),
        until: expect.any(String)
       })]))
    })
})