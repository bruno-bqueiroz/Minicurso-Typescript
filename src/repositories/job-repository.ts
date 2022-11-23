import { Job } from "../protocols/job"
import arrayJobs from "../database/data"

function findMany(){
    return arrayJobs
}

function insertUnique(job: Job){
    job.id = arrayJobs.length + 1
    arrayJobs.push(job)
    return arrayJobs
}

export{ 
    findMany,
    insertUnique
}