import {Request, Response} from 'express';

function isOdd(numb){
    if (numb % 2 !== 0){
        return true;
    } else return false;
}

    const resultado = isOdd(1);

function convertCLTToPJ(req: Request, res: Response){
    const {salary} = req.query;
    const newSalary = Number(salary) + (Number(salary) * 0.3);
    res.send({
        resultado: `O seu salario deve ser pelo menos: ${newSalary}`
    })
}

export {
    convertCLTToPJ,
}