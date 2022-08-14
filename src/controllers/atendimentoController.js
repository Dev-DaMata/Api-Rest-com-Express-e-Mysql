import Tabelas from "../infra/tabelas.js";
import atendimentosModel from "../models/atendimentosModel.js";

const atendimentoController = (app)=>{
    app.get('/atendimento', (req, res)=>{
        try {
            res.status(200).json(
                {
                    "msg": "deu bom",
                    "erro": false
                }
            )
        } catch (error) {
            res.status(404).json(
                {
                    "msg": "A Rota POST esta com erro, favor verificar",
                    "erro": true
                }
            )
        }
    })

    app.post('/atendimento', (req,res)=>{
        const atendimento = req.body 
        atendimentosModel.adiciona(atendimento)
        res.send('Post atendimento')
    })
}
export default atendimentoController