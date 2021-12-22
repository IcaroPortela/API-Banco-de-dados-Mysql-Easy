/* async function conect() {
    const mysql = require('mysql2/promise')
    const conn = await mysql.createConnection({
        host:'localhost',
        user: 'root',
        database: 'usuarios'
    })
    console.log('Conexao com sucesso!')
    await conn.end();
}

conect()*/

class Connection{
    
    async connectiontoo(host, user, database){
        const mysql = require('mysql2/promise')
        const conn = await mysql.createConnection({
            host: `${host}`,
            user: `${user}`,
            database: `${database}`
        })
        console.log(`Conexão com o banco ${database} retornou com sucesso!`)
        await conn.end()
    }
}

const db = new Connection()
db.connectiontoo('localhost','root','')