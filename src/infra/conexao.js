import  mysql  from "mysql2";


const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  insecureAuth : true
});

export default conexao
