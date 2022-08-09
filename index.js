
const express = require("express");
const app = express();
let port = 3000;

const helmet = require("helmet");
app.use(helmet());

app.use(express.json());

const rutas = require("./routes/routesUsers");

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



//? GET /api/users

app.use("/api", rutas);

//? crear usuario  /api/users

app.use("/api", rutas);

// app.post("/api/users", (req, res) => {
//     const newUser = {
//         id: dataBase.length + 1,
//         nombre: req.body.Nombre,
//         mensajes: [],
//         conectado: false,
//         seguidores: 0,
//         siguiendo: 0,
//         puntuacion: 0
//     };
//     dataBase.push(newUser);
//     return res.send(newUser);
// });

//? eliminar usuario /api/users/:id

app.use('/api/users', rutas);

// app.delete("/api/users/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const user = dataBase.find((user) => {
//         return user.id === id;
//     })
//     if (!user) {
//         return res.status(404).send("No hemos encontrado un usuario con ese id");
//     }
//     else {
//         const index = dataBase.indexOf(user);
//         dataBase.splice(index, 1);
//         return res.send(dataBase);
//     };
// })

//? -	Añadir nuevos mensajes al usuario

app.use('/api/users', rutas);

// app.patch("/api/users/mensajes/:id", (req, res) => {

//     const id = parseInt(req.params.id);
//     const user = dataBase.find((user) => {
//         return user.id === id;
//     })
//     if (!user) {
//         return res.status(404).send("No hemos encontrado un usuario con ese id");
//     }
//     else {
//         newMensaje = req.body.mensajes;
//         user.mensajes.push(newMensaje);
//         return res.send(user);
//     }

// })

//?-	Cambiar el estado de conexión del usuario

app.use('/api/users', rutas);

// app.put("/api/users/conectado/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const user = dataBase.find((user) => {
//         return user.id === id;
//     })
//     if (!user) {
//         return res.status(404).send("No hemos encontrado un usuario con ese id");
//     }

//     user.conectado === false ? user.conectado = true : user.conectado = false;
//     return res.send(user);
// }
// );

//? -	Modificar la puntuación del usuario


app.use('/api/users', rutas);

// app.patch("/api/users/puntuacion/:id", (req, res) => {

//     const id = parseInt(req.params.id);
//     const user = dataBase.find((user) => {
//         return user.id === id;
//     })

//     if (!user) {
//         return res.status(404).send("No hemos encontrado un usuario con ese id");
//     }

//     user.puntuacion = req.body.puntuacion;
//     return res.send(user);

// })






app.listen(port, () => {
    console.log(`servidor escuchando desde el puerto ${port}`);
});