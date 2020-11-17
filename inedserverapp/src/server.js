const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize, QueryTypes } = require('sequelize');
const { request } = require("express");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get('/API/AllAdults', async (req, res) => {
    
    const adults = await sequelize.query("SELECT * FROM ds02_personas ORDER BY Nombre", { type: QueryTypes.SELECT });

    res.send(adults)
})

app.get('/API/AllUsers', async (req, res) => {

    const users = await sequelize.query("SELECT b01_us_id,b01_us_Nombre, b01_us_Apellido, b01_us_clave, b01_us_password, b01_us_role FROM ds01_usuarios ORDER BY b01_us_Nombre", { type: QueryTypes.SELECT });

    res.send(users)
})

app.post('/API/SetAdults', async (req, res) => {

    console.log(req.body);
    res.sendStatus(200);
})

app.post('/API/SetUsers', async (req, res) => {

    console.log(req.body);
    console.log(await sequelize.query("SELECT MAX(b01_us_id) FROM ds01_usuarios", { type: QueryTypes.SELECT }));
    let id = await sequelize.query("SELECT MAX(b01_us_id) FROM ds01_usuarios", { type: QueryTypes.SELECT });
    id[0]['MAX(b01_us_id)']++;
    await sequelize.query("INSERT INTO ds01_usuarios (b01_us_id, b01_us_Nombre, b01_us_Apellido, b01_us_clave, b01_us_password, b01_us_role) VALUES (" + id[0]['MAX(b01_us_id)'] + ",'" + req.body.b01_us_Nombre + "','" + req.body.b01_us_Apellido + "','" + req.body.b01_us_clave + "'," + req.body.b01_us_password + ",'" + req.body.b01_us_role + "')"), function (err) {
        res.sendStatus(500)
    }
    res.sendStatus(200);
}
)

app.get('/API/DeleteUser/:userId', async (req, res) => {
    await sequelize.query(`DELETE FROM ds01_usuarios WHERE b01_us_id = ${req.params.userId} `, {
        replacements: {},
        type: QueryTypes.DELETE
    });
    res.sendStatus(200);
})

app.get('/API/EditUser/:userId', async (req, res) => {
    const user = await sequelize.query(`SELECT b01_us_id, b01_us_Nombre, b01_us_Apellido, b01_us_clave, b01_us_password, b01_us_role FROM ds01_usuarios WHERE b01_us_id = ${req.params.userId} `, {
        replacements: {},
        type: QueryTypes.SELECT
    });
    res.send(user);
})

app.post('/API/UpdateUser', async (req, res) => {

    // console.log(req.body);
    // console.log(await sequelize.query("SELECT MAX(b01_us_id) FROM ds01_usuarios", { type: QueryTypes.SELECT }));
    // let id = await sequelize.query("SELECT MAX(b01_us_id) FROM ds01_usuarios", { type: QueryTypes.SELECT });
    // id[0]['MAX(b01_us_id)']++;
    await sequelize.query(`UPDATE ds01_usuarios 
    SET b01_us_Nombre = '${req.body.b01_us_Nombre}', 
    b01_us_Apellido = '${req.body.b01_us_Apellido}', 
    b01_us_clave = '${req.body.b01_us_clave}', 
    b01_us_password = ${req.body.b01_us_password}, 
    b01_us_role= '${req.body.b01_us_role}' 
    WHERE b01_us_id= ${req.body.b01_us_id}`
    ,
    )

    res.sendStatus(200);
}
)

app.get('/API/DeleteAdult/:userId', async (req, res) => {
    await sequelize.query(`DELETE FROM ds01_usuarios WHERE b01_us_id = ${req.params.userId} `, {
        replacements: {},
        type: QueryTypes.DELETE
    });
    res.sendStatus(200);
})

app.get('/API/EditAdult/:userId', async (req, res) => {
    const user = await sequelize.query(`SELECT b01_us_id, b01_us_Nombre, b01_us_Apellido, b01_us_clave, b01_us_password, b01_us_role FROM ds01_usuarios WHERE b01_us_id = ${req.params.userId} `, {
        replacements: {},
        type: QueryTypes.SELECT
    });
    res.send(user);
})

app.post('/API/UpdateAdult', async (req, res) => {

    // console.log(req.body);
    // console.log(await sequelize.query("SELECT MAX(b01_us_id) FROM ds01_usuarios", { type: QueryTypes.SELECT }));
    // let id = await sequelize.query("SELECT MAX(b01_us_id) FROM ds01_usuarios", { type: QueryTypes.SELECT });
    // id[0]['MAX(b01_us_id)']++;
    await sequelize.query(`UPDATE ds01_usuarios 
    SET b01_us_Nombre = '${req.body.b01_us_Nombre}', 
    b01_us_Apellido = '${req.body.b01_us_Apellido}', 
    b01_us_clave = '${req.body.b01_us_clave}', 
    b01_us_password = ${req.body.b01_us_password}, 
    b01_us_role= '${req.body.b01_us_role}' 
    WHERE b01_us_id= ${req.body.b01_us_id}`
    ,
    )

    res.sendStatus(200);
}
)

app.post('/API/CheckUser', async (req, res) => {
    
    const user = await sequelize.query(`SELECT b01_us_Nombre, b01_us_Apellido, b01_us_clave, b01_us_password, b01_us_role FROM ds01_usuarios WHERE b01_us_clave = '${req.body.b01_us_clave}' AND b01_us_password= ${req.body.b01_us_password}`, {
        replacements: {},
        type: QueryTypes.SELECT
    }
    , 
    function (err) {
        res.sendStatus(404)
    }
    );
    //console.log(user);
    res.send(user);
})


const sequelize = new Sequelize('ineddb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});