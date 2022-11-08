type Job = {
    id: number,
    title: string,
    salary: number,
    skills?: (string | number)[],
    until: Date | string 
}

const arrayJobs: Job[] = [
    {
        id: 1,
        title: 'TechLead',
        salary: 4000,
        skills: ['typescript', 'react', 4],
        until: '2023-10-10'
    },
    {
        id: 2,
        title: 'Developer',
        salary: 4000,
        skills: ['typescript', 'react', 4],
        until: '2023-10-10'
    },
    {
        id: 3,
        title: 'Tia do Café',
        salary: 3000,
        until: '2023-10-10'
    }
]

function findMany(){
    return arrayJobs
}

function insertUnique(job: Job){
    arrayJobs.push(job)
}

export{ 
    findMany,
    insertUnique
}