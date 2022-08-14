import conexao from "../infra/conexao.js";
import moment from "moment";

class atendimentosModel{
    static adiciona(Atendimento, res){
        const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS")
        const data = moment(Atendimento.data, 'DD/MM/YYYY').format("YYYY-MM-DD HH:MM:SS")
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = Atendimento.cliente.length >= 5 
        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: "cliente",
                valido: clienteEhValido,
                mensagem: 'O cliente teve ter pelo menos cinco caracteres'
            }
        ]
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
        if(existemErros){
            res.status(400).json(erros)
        }else{
            const atendimentoDatado = {...Atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'
        conexao.query(sql, atendimentoDatado, (erro, resultado)=>{
            if(erro){
                res.status(400).json(
                    {
                        "msg":" NãoFoi"
                    }
                )
            }else{
                res.status(201).json(
                    {
                        "msg":"Foi"
                    }
                )
            }
        })
        }
    }

    
}

export default atendimentosModel
