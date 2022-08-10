import  mysql  from "mysql2";


const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  insecureAuth : true,
  database: 'agenda-petshop'
});

export default conexao
