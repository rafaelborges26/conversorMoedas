import 'reflect-metadata'
import express from 'express'

import routes from './routes'
import './database'

//import mysql from 'mysql'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3333, () => {
    console.log("Server started");
})


//const con = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: '123456',
//    database: 'converter'
//})
//
//con.connect((err) => {
//    if (err) {
//        console.log('Erro connecting to database...', err)
//        return
//    }
//    console.log('Connection established!')
//})
//
//con.end((err) => {
//    if(err) {
//        console.log('Erro to finish connection...', err)
//        return 
//    }
//    console.log('The connection was finish...')
//})
