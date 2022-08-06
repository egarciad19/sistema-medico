const con = require('../Configs/cone');

module.exports={
    getExpedienteByNoExpediente(no_expediente){
        return new Promise((resolve,reject)=>{
            con.query( 'SELECT * FROM xxy5tom9qzivzugf.expedientes WHERE no_expediente = ? ', no_expediente, (err,rows)=> {
                if(err) reject(err);
                else resolve(rows);
            })
        })
    },   

    getTipoSoporteInterno(){
        return new Promise((resolve,reject)=>{
            con.query('SELECT pa.*  FROM xxy5tom9qzivzugf.datos_catalogos as pa ' +
            'where pa.codigo_catalogo = 8', (err,rows)=> {
                if(err) reject(err);
                else resolve(rows);
            })
        })
    },  
    
    getTipoSoporteExterno(){
        return new Promise((resolve,reject)=>{
            con.query('SELECT pa.*  FROM xxy5tom9qzivzugf.datos_catalogos as pa ' +
            'where pa.codigo_catalogo = 9', (err,rows)=> {
                if(err) reject(err);
                else resolve(rows);
            })
        })
    },
    
   
}