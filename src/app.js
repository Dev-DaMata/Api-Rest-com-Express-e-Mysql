import express from "express";
import atendimentoController from "./controllers/atendimentoController.js";
import conexao from "./infra/conexao.js";
import bodyParser from "body-parser";

const app = express()
const port = 3000

app.use(bodyParser)
app.use(express.json());

conexao.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        console.log("A conexão com o banco de dados mysql foi feita com sucesso!");
        atendimentoController(app)

        app.listen(port, () => {
            console.log(`http://localhost:${port}/`);
        })

    }
})