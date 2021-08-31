const fsp = require("fs/promisses");
const path = require("path");
const { EOL } = require("os");

/*EOL QUEBRA LINHA*/ 
(async () => {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));

        const nomes = data.toString("utf-8").split(EOL);

     console.log(nomes.filter(nome => nome[0].toUpperpCase() === "A"));

    } catch (err) {
        console.log(err.message);
    }
})();


  