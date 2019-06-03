import { Person } from './person';

export class Student extends Person{
    
    constructor(name: string){
        super(name);
    }

    public Show(age:number): void{
        console.log('studying'),
        super.Show(age);
    }
}