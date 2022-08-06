const con = require('../Configs/cone');

module.exports={
    getClienteByNit(nit_cliente){
        return new Promise((resolve,reject)=>{
            con.query( 'SELECT * FROM xxy5tom9qzivzugf.clientes WHERE nit_cliente = ? ', nit_cliente, (err,rows)=> {
                if(err) reject(err);
                else resolve(rows);
            })
        })
    },   
}