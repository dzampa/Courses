class user{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

    isAdmin(){
        return this.admin ===true;
    }
}

class admin extends user{
    constructor(email,password){
        super(email,password);
        this.admin = true
    }
}

const User1 = new user('email@prov.com', 'asd123');
const Adm1 = new admin('email@prov.com', 'asd123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
   
const idade = usuarios.map(usuario => usuario.idade);

console.log(idade);

const empresa = usuarios.filter(usuario =>usuario.idade >= 18 && usuario.empresa === 'Rocketseat');

console.log(empresa);

const Goog = usuarios.find(usuario => usuario.empresa === 'Google');

console.log(Goog);

const idademult = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <=50);

console.log(idademult);

const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
mostraIdade(usuario);

const nome = "Diego";
const idade2 = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({
    nome,
    idade
});
mostraUsuario(nome, idade2);
mostraUsuario(nome);

const promise = () => new Promise((resolve, reject) => resolve());

const empresa2 = {
    nome2: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome2, endereco:{cidade, estado}} = empresa2;

console.log(nome2); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo(nome, idade) {
    return `${nome} tem ${idade} anos.`;
}

mostraInfo({ nome: 'Diego', idade: 23 })

const arr2 = [1, 2, 3, 4, 5, 6];

const[x, ...y] = arr2;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...params){
    return params.reduce((total, next)=> total+next);
}

// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario2 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const user1 = {...usuario2, nome:"Gabriel"};

const user2 = {...usuario2.endereco, cidade:"Lontras"};

console.log(user1);
console.log(user2);

const usuario3 = 'Diego';
const idade3 = 23;
console.log(`O usuário ${usuario3} possui ${idade3} anos`);

const nome3 = 'Diego';
const idade4 = 23;
const usuario4 = {
 nome3,
 idade4,
 cidade: 'Rio do Sul',
};
