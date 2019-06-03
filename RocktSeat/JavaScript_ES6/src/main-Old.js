/*** Class ***/
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(data);
    }
}

class TodoList extends List{
    constructor() {
        super();

        this.user = 'Diego';
    }

    showUser(){
        console.log(this.user)
    }
}

var MyList = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MyList.add('New todo');
}

class Math{
    static sum(a,b){
        return a+b;
    }
}

MyList.showUser();

console.log(Math.sum(1,2));

/***Const & LET ****/
//não pode atribuir
const a = 1

//pode atribuir
const user = {name:'Diego'};
user.name = 'Cleiton'

console.log(user);

function test(x){
    let y=2;
    if (x>5){
        let y = 4;
        console.log(x, y);
    }
}
/*** Vetores ***/
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
})

console.log(find);

/*** Arrow Functions ***/
const newArr2 = arr.map(item => item * 2);
console.log(newArr2); 


const test0 = () => {'test0'};
console.log(test0());

const test1 = () => ({
    nome:'diego'
});
console.log(test1());

/*** valores padrão ***/
const sum2 = (a = 3,b = 6) => a + b;

console.log(sum2(1))
console.log(sum2())

/*** desestruturação ***/
const user2 = {
    name: 'Diego',
    age: 30,
    address: {
        city: 'Sorocaba',
        state: 'SP'
    }
};

const {name, age, address:{city}} = user2;

console.log(name);
console.log(age);
console.log(city)

function showName({name, age}){
    console.log(name, age);
}

showName(user2);

/*** Op rest/spred ***/
//REST

const user3 = {
    name2: 'Diego',
    age: 30,
    empresa: 'Rocketseat'
}

const {name2, ...rest} = user3;
console.log(name);
console.log(rest);

const arr2 = [1, 2, 3, 4];

const[a2, b2, ...c2] = arr2;
console.log(a2);
console.log(b2);
console.log(c2);

function sum3(...params){
    return params.reduce((total, next)=> total+next);
}
console.log(sum3(1,3,4))

function sum4(a3, b3,...params){
    return params;
}
console.log(sum4(1,3,4,5,6,7,8,9))

//SPREAD

const arr3 = [1,2,3];
const arr4 = [4,5,6];

const arr5 = [...arr3, ...arr4];
console.log(arr5);

const user4 = {
    name: 'Diego',
    age: 30,
    empresa: 'Rocketseat'    
}

const user5 = { ...user4, name: 'Diogo'}
console.log(user5);

/*** Template Literals ***/
const name3 = "Diego";
const age2 = 30;

console.log('Meu nome é ' + name3 + ' e tenho ' + age2 + ' anos.');
console.log(`Meu nome é ${name3} e tenho ${age2} anos.`);

/*** Object Shot Syntax ***/
const name4 = "Diego";
const age3 = 30;

const user6 = {
    name4,
    age3,
    company: 'GFT'
};

console.log(user6);
