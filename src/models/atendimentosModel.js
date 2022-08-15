import conexao from "../infra/conexao.js";
import moment from "moment";
import { query } from "express";

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

    static lista(res){
        const sql = 'SELECT * FROM Atendimentos'
        conexao.query(sql, (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    static buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`
        conexao.query(sql, (erro, resultado)=>{
            const atendimento = resultado[0]
            if (erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json(atendimento)
            }
        })
    }

    static altera(id, valores ,res){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format("YYYY-MM-DD HH:MM:SS")
        }
        const sql = "UPDATE Atendimentos SET ? WHERE id=?"

        conexao.query(sql, [valores, id], (erro, resultado) =>{
            if (erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }

    static deleta(id, res){
        const sql =   'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(`O id ${id}, foi deletado com sucesso`)
            }
        })
    }
}

export default atendimentosModel
