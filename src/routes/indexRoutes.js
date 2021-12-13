const express = require('express');
const routes = express.Router();

const Novela = require('../models/Novela');
// GET
routes.get('/', async (req, res)=>{
    const novelas = await Novela.find({});
    // Enviamos los datos a la vista
    res.render('index', {
        novela: novelas
    });
})
routes.get('/verNovela/:id', async (req, res)=>{
    const {id} = req.params;
    const novela = await Novela.findById(id);
    // Enviamos los datos a la vista
    res.render('verNovela', {
        novela: novela
    });
});

// POST
routes.post('/add', async (req, res)=>{
    const novela = new Novela(req.body);
    await novela.save();
    res.redirect('/');
})

module.exports = routes;   