/*2) Crie uma função getUserByName(name) que retorne o usuário obtido através do arquivo "users.json". Caso o usuário
não exista a função deve retornar undefined.

Se o usuário existir mostrar as informações do usuário no seguinte formato:
Usuário encontrado: 
nome: [nome do usuário]
idade: [idade do usuário]
email: [email do usuário]

Caso o usuário não existir mostrar a mensagem: "Usuário não foi encontrado."*/

const fsp = require("fs/promises");
const path = require("path");
const { EOL } = require("os");

async function getUserByName(name){
    try {
        const data = await fsp.readFile(path.resolve(__dirname, "users.json"));
        
        const users = JSON.parse(data)
        console.log(users);
        console.log(typeof users);
        
        const nomes = data.toString("utf-8").split(EOL);

        console.log(.find(nome => nome[0]));        
    } catch (err) {
        console.log(err.message);
    }
})();


(async () => {
const user = await getUserByName("pedro")
if(){
    console.log
}
})