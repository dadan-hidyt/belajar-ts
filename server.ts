import express, {Request,Response} from "express";
import connect from "./libs/mysql";
import { OkPacketParams, QueryError } from "mysql2";

const app = express();

const port = process.env.PORT || 3000;

app.get('/',function(req : Request, res:Response){
    connect.execute("SELECT * FROM agenda",function(err ,result ){
        if(err) {
            res.json({
                errors : {
                    msg : err,
                },
            })
        } else {
            res.json(result)
        }
    });
    
});

app.listen(port,()=>{
    console.info("[Y] Server Berjalan pada port: localhost:"+port);
})