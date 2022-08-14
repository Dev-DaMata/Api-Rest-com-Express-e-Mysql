import conexao from "../infra/conexao.js";
import moment from "moment";

class atendimentosModel{
    static adiciona(Atendimento){
        const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS")
        const data = moment(Atendimento.data, 'DD/MM/YYYY').format("YYYY-MM-DD HH:MM:SS")
        const atendimentoDatado = {...Atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'
        conexao.query(sql, atendimentoDatado, (erro, resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }
}

export default atendimentosModel
