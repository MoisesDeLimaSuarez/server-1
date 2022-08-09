const dataBase = [
    {
        id: 1,
        Nombre: "Pedro ",
        mensajes: ["Hola", "Como estas?", "Bien"],
        conectado: true,
        seguidores: 564,
        siguiendo: 333,
        puntuacion: 3455
    },
    {
        id: 2,
        Nombre: "maria ",
        mensajes: ["Hola", "Como estas?", "Bien", "la cabra mocha "],
        conectado: false,
        seguidores: 5644,
        siguiendo: 33433,
        puntuacion: 34655
    },
    {
        id: 3,
        Nombre: "juan ",
        mensajes: ["Hola", "Como estas?", "Bien", "me estoy volviendo loco  "],
        conectado: true,
        seguidores: 564,
        siguiendo: 333,
        puntuacion: 3455
    },
    {
        id: 4,
        Nombre: "jose ",
        mensajes: ["Hola", "Como estas?", "Bien", "me estoy volviendo loco ", "en algun lugar de la mancha"],
        conectado: false,
        seguidores: 564,
        siguiendo: 3353,
        puntuacion: 355
    },
    {
        id: 5,
        Nombre: "juan ",
        mensajes: ["Hola", "Como estas?", "Bien", "me estoy volviendo loco ", "de cuyo nombre no suelo acordarme"],
        conectado: true,
        seguidores: 564,
        siguiendo: 333,
        puntuacion: 3455
    }
]

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Recibido GET desde raiz de cursos');
    res.json({
        message: 'Todo correcto'
    })
})

router.get('/users', (req, res, next) => {
    console.log('Recibido GET desde api/cursos');
    res.json(dataBase);
})

router.post('/users', (req, res, next) => {
    const newUser = {
        id: dataBase.length + 1,
        nombre: req.body.Nombre,
        mensajes: [],
        conectado: false,
        seguidores: 0,
        siguiendo: 0,
        puntuacion: 0
    };
    dataBase.push(newUser);
    return res.send(newUser);
})

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const user = dataBase.find((user) => {
        return user.id === id;
    })
    if (!user) {
        return res.status(404).send("No hemos encontrado un usuario con ese id");
    }
    else {
        const index = dataBase.indexOf(user);
        dataBase.splice(index, 1);
        return res.send(dataBase);
    };

})

router.patch('/mensajes/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const user = dataBase.find((user) => {
        return user.id === id;
    })
    if (!user) {
        return res.status(404).send("No hemos encontrado un usuario con ese id");
    }
    else {
        newMensaje = req.body.mensajes;
        user.mensajes.push(newMensaje);
        return res.send(user);
    }

})

router.put('/conectado/:id', (req, res, next) => {

    const id = parseInt(req.params.id);
    const user = dataBase.find((user) => {
        return user.id === id;
    })
    if (!user) {
        return res.status(404).send("No hemos encontrado un usuario con ese id");
    }

    user.conectado === false ? user.conectado = true : user.conectado = false;
    return res.send(user);

}
)

router.patch('/puntiacion/:id', (req, res, next) => {

    const id = parseInt(req.params.id);
    const user = dataBase.find((user) => {
        return user.id === id;
    })

    if (!user) {
        return res.status(404).send("No hemos encontrado un usuario con ese id");
    }

    user.puntuacion = req.body.puntuacion;
    return res.send(user);


})

module.exports = router;