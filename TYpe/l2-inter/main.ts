import { Person } from '../l1-class/person';
import { PersonDao } from './person-dao';
import { DaoInterface } from './dao.interface';

let personDao: DaoInterface = new PersonDao();
let person: Person = new Person('XD');

personDao.insert(person);
