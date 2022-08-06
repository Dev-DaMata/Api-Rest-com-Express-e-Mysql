import  express  from "express";
import atendimentoController from "./controllers/atendimentoController.js";
import bodyParser from "body-parser";
const app = express()
const port = 3000
app.use(bodyParser)
app.use(express.json());
atendimentoController(app)
app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`);
})

