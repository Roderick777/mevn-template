import express from 'express';
import general from "../general.js";
import Nota from '../models/Nota';

const router = express.Router();

//Agregar Nota
router.post('/nueva-nota', async (req, res) => { 
    const body = req.body;
    try {
        const notaDB = await Nota.create(body);
        res.status(200).json(notaDB);
    } catch (error) {
        return general.errorApi(res, error, 'Ha ocurrido un error')
    }
});

//Todas las notas
router.get('/notas', async(req, res) => {
    try {
        const notaDB = await Nota.find({});
        res.status(200).json(notaDB);
    } catch (error) {
        return general.errorApi(res, error, 'Ha ocurrido un error')
    }
});

module.exports = router;