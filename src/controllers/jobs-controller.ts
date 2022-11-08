import {Request, Response } from "express";
import { findMany, insertUnique } from "../repositories/job-repository.js";

const jobs: string[] = ['TechLead', 'Developer'];
let resultado: boolean | number | string = "0";
const newJobs: (string | boolean)[] = ['TechLead', true];

const objectJobs: {
    id: number,
    title: string,
    salary: number,
    skills: (string | number)[],
    until: Date | string
} = {
    id: 1,
    title: 'TechLead',
    salary: 4000,
    skills: ['typescript', 'react', 4],
    until: '2023-10-10'
}




function listAll(req: Request, res: Response){
    const resultado = findMany();
    return res.send(resultado)
}

function insert(req: Request, res: Response){
    //insertUnique()   
}

export {
    listAll,
    insert
}