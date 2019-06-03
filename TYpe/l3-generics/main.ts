import { DaoInterface } from './dao.interface';
import { Person } from '../l1-class/person';
import { Dao } from './dao';

let dao: DaoInterface<Person> = new Dao<Person>();
let person: Person = new Person('XD');

dao.insert(person);
