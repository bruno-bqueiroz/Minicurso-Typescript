import {Request, Response } from "express";
import { findMany, insertUnique } from "../repositories/job-repository";
import { Job } from "../protocols/job.js";


function listAll(req: Request, res: Response){
    const resultado = findMany();
    return res.status(200).send(resultado)
}

function insert(req: Request, res: Response){
   const newJob = req.body as Job;
    const insertedJob = insertUnique(newJob) 
  
    return res.send(`Job inserted whith id: ${insertedJob[insertedJob.length -1].id}`)
}

export {
    listAll,
    insert
}