var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

buttonElement.setAttribute('onclick', 'listRepo()');
function listRepo(){

    var user = inputElement.value;

    if (!user) return;

    var list = document.createElement('li');
    list.textContent = "Loading....";
    listElement.appendChild(list);
    
    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function(response){
        fillFields(response.data);
    })
    .catch(function(){        
        list.textContent = "User not found!";
        list.style.color = "#F00"
        listElement.appendChild(list);
    });
};

function fillFields(repositories){
    for (repo of repositories) {
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');
        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
      }
};

function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            return idade >= 18 ? resolve() : reject(); 
        },2000);
    });
};

checaIdade(15)
.then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });