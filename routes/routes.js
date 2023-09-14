const express = require('express');
const {MongoClient} = require('mongodb');

require('dotenv').config();
const router = express.Router();

const bases = process.env.MONGO_URI;
const nameBases = "microservicio_eps";

//! -1- Obtener todos los pacientes de manera alfabética.

router.get('/ejercicio1',async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nameBases);
        const collection = db.collection('usuario');
        const result = await collection.find().sort({usu_nombre:1}).toArray();
        res.json(result);
        client.close();
    } catch (e) {
        res.status(500).json('Not Found')
    }
})

//! -3- Obtener todos los médicos de una especialidad en específico (por ejemplo, ‘Cardiología’).

router.get('/ejercicio3',async (req,res) =>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nameBases);
        const collection = db.collection('medico');
        const result = await collection.find({med_especialidad:'Cardiología'}).toArray();
        res.json(result);
        client.close();
    } catch (e) {
        res.status(500).json('Not Found')
    }
})


//! -6- Encontrar todas las citas de un día en específico (por ejemplo, ‘05-04-2023’).

router.get('/ejercicio6',async(req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nameBases);
        const collection = db.collection('cita');
        const result = await collection.find({cit_fecha:"05-04-2023"}).toArray();
        res.json(result);
        client.close();
    } catch (e) {
        res.status(500).json('Not Found')
    }
})

//! -7- Obtener todos los medicos con sus consultorios correspondientes

router.get('/ejercicio7',async (req,res)=>{
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nameBases);
        const collection = db.collection('medico');
        const result = await collection.find().toArray();
        res.json(result);
        client.close()
    } catch (e) {
        res.status(500).json('Not found')
    }
})



module.exports = router;