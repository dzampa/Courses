import * as funcoes from './funcoes';
import somaFunction, {sub as Sub} from './soma';
import ClasseUsuario, {idade as IdadeUsuario} from './functions';

console.log(funcoes.soma(4,2)); 
console.log(funcoes.sub(4,2)); 
console.log(funcoes.mul(4,2)); 

console.log(somaFunction(1,2)); 
console.log(Sub(4,2)); 

console.log(ClasseUsuario.info());
console.log(IdadeUsuario);