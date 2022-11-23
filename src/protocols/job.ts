export type Job = {
    id: number,
    title: string,
    salary: number,
    skills?: (string | number)[],
    until: Date | string 
}