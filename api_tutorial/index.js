const { response, request } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;

//IMPORTANNDO AS ROTAS
const usersRoutes = require("./routes/usersRoutes")

// DEFININDO OS MIDDLEWARES
app.use(express.json());

// DEFININDO AS ROTAS
app.use("/users", usersRoutes);

//ROTAS DA RAIZ "/"
app.get("/", (request,response) => {
    console.log(request);
    console.log(response);
  response.send("hello world!");
});

app.post("/", (request, response) => {
    response.send("metodo POST");
});

app.put("/", (request,response) => {
    response.send("metodo PUT");
});

app.delete("/", (request, response) => {
    response.send("metodo DELETE");
});

//


//usuario









app.listen(PORT, () => console.log("o servidor estaa rodando..."));