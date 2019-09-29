import mongoose from 'mongoose';

export default {
    MongoOptions : {
        useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
    }, 
    MongoUri: 'mongodb://localhost:27017/udemy',
    MongoConnect: function(uri, options){
        mongoose.connect(uri, options).then(
            () => { console.log('conectado a mongoose'); },
            err => { err}
        );
    }, 
    errorApi: function(res, error, mensaje){
        return res.status(500).json({
            mensaje: mensaje,
            error
        })
    }
}