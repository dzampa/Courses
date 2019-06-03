import { Person } from '../l1-class/person';
import { DaoInterface } from './dao.interface';

export class PersonDao implements DaoInterface{

    tabName: string;

    insert(person: Person): boolean{
        console.log(person.toString())
        return true;
    }

    update(person: Person): boolean{
        return true;
    }

    delete(id: number): boolean{
        return true;
    }

    find(id: number): boolean{
        return null;
    }

    findAll():[Person]{
        return [new Person('XD')];
    }
}