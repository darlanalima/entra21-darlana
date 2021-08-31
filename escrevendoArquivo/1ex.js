const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const { EOL } = require("os");

(async () => {
   // const conteudo = `Esse texto foi criado através de um arquivo no node${EOL}Essa é uma nova linha`;

    try {
        fsPromises.readFile(path.resolve(__dirname, "alunos.json");
        //console.log("O arquivo teste2.txt foi criado com sucesso!");
    } catch(err) {
        console.log(err);
    }
})();

if(media >= 6){
    console.log("Aprovado!")
}else{
    console.log("reprovado")
}

[
    {
        "matricula": 111,
        "nome": "João",
        "email": "joao@email.com",
        "notas": [10, 10, 10],
        "media": 10
    },
    {...}
]
