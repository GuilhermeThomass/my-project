import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bakery"
})

app.listen(8081, ()=>{
    console.log("Runnig...");
})

app.get('/get',(req,res)=>{
    const sql = 'select * from products'
    db.query(sql,(error,result) =>{
        if(error) return res.json("Error");
        return res.json(result);
    })
})

app.post('/upload', (req , res)=>{
    const {name} = req.body;
    const {amount} = req.body;
    const {value} = req.body;
    const {role} = req.body;
    const {size} = req.body;
    const sql = "INSERT INTO products (name,amount,value,role,size) VALUES (?,?,?,?,?)"
    db.query(sql , [name,amount,value,role,size],(error , resultados)=>{
        if(error) return res.json(error)
        return res.json(resultados);
    })
})
