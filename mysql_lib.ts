import mysql2 from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

let connect: Connection = mysql2.createConnection({
    user : "root",
    host : "localhost",
    password : '',
    database : 'db_dadan',
});

connect.connect();
export default connect;