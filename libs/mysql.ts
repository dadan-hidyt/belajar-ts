import mysql2 from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

const connect : Connection = mysql2.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "db_dadan",
});
connect.connect()
export default connect;