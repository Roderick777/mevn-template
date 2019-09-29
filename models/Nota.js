
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const notaSchema = new Schema({
    nombre: { type: String, required: [true, 'Debe ingresar el campo nombre' ] },
    descripcion: String,
    usuario_id: String,
    date:{ type: Date, default: Date.now },
    activo: { type: Boolean, dafault: true }
});

const Nota = mongoose.model('Nota', notaSchema);
export default Nota;