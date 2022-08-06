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
        try {
            res.status(201).json(
                {
                    "msg":"você esta utilizando a rota post",
                    "erro": false
                }
            )
        } catch (error) {
            res.status(404).json(
                {
                    "msg": "A Rota POST não esta sendo utilizado da maneira correta!" 
                }
            )
        }
    })
}
export default atendimentoController