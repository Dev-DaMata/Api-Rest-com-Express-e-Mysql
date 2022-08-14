import Tabelas from "../infra/tabelas.js";
import atendimentosModel from "../models/atendimentosModel.js";

const atendimentoController = (app)=>{
app.get('/atendimento', (req,res)=>{
    atendimentosModel.lista(res)
})

app.get('/atendimento/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    atendimentosModel.buscaPorId(id, res)
})

    app.post('/atendimento', (req,res)=>{
        const atendimento = req.body 
        atendimentosModel.adiciona(atendimento, res)
    })
}
export default atendimentoController