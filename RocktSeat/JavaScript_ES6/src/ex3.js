
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
/*function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}*/
async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('1s');
    await delay();
    console.log('1s');
};

umPorSegundo();

/*function getUserFromGithub(user) {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}*/

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    } catch (err){
        console.warn('usuário não existe');
    };
};

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

/*class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Repositório não existe');
        })
    }
}*/

class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err){
            console.log('Repositório não existe');
        }; 
    };
};

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

/*const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    });
}*/

const buscaUsuario = async usuario => {
    try{
        const respose = await axios.get(`https://api.github.com/users/${user}`);
        console.log(respose.data);
    } catch(err) {
        console.log('Usuário não existe');
    };
}

buscaUsuario('diego3g');