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
    let id = await sequelize.query("SELECT MAX(Id_Persona) FROM ds02_personas", { type: QueryTypes.SELECT });
    id[0]['MAX(Id_Persona)']++;
    await sequelize.query("INSERT INTO ds02_personas(Id_Persona, Folio_solicitud, Nombre, Apellido_Paterno, Apellido_Materno, Fecha_Nacimiento, RFC, Curp, Nombre_Completo, Sexo, Status, StatusArchivo, Edad, Tipo_Telefono, Telefono, Rep_Completo, Domicilio_Principal, Tipo_Vialidad, Unidad_Territorial, Codigo_Postal, Regimen_Hab, Regimen, Tipo_Asentamiento, Asentamiento, Observaciones, Fecha_Alta) VALUES (" + id[0]['MAX(Id_Persona)'] + ",'" + req.body.Folio_solicitud + "','" + req.body.Nombre + "','" + req.body.Apellido_Paterno + "'," + req.body.Apellido_Materno + ",'" + req.body.Fecha_Nacimiento + ",'" + req.body.Rfc + ",'" + req.body.Curp + ",'" + req.body.Nombre_Completo + ",'" + req.body.Sexo + ",'" + req.body.Status + ",'" + req.body.Status_Archivo + ",'" + req.body.Edad + ",'" + req.body.TipoTel + ",'" + req.body.Telefono + ",'" + req.body.Rep_Completo + ",'" + req.body.Domicilio_Principal + ",'" + req.body.Tipo_Vialidad + ",'" + req.body.UT + ",'" + req.body.Codigo_Postal + ",'" + req.body.Regimen_Hab + ",'" + req.body.Regimen + ",'" + req.body.tipo_Asentamiento + ",'" + req.body.Asentamiento + ",'" + req.body.Observaciones + ",'" + req.body.Fecha_Alta + "')")
    , function (err) {
        res.sendStatus(500)
    }
    let id2 = await sequelize.query("SELECT MAX(per_Id_Persona) FROM ds06_personas", { type: QueryTypes.SELECT });
    id2[0]['MAX(Id_Persona)']++;
    await sequelize.query("INSERT INTO ds06_personas (per_Id_Persona, per_Nombre, per_Apellido_Paterno, per_Apellido_Materno, per_Fecha_Nacimiento, per_Edad, per_RFC, per_Curp, per_Nombre_Completo, per_Sexo, per_Status, idds02, Idp, per_Fecha_Alta) VALUES (" + id2[0]['MAX(per_Id_Persona)'] + ",'" + req.body.Nombre + "','" + req.body.Apellido_Paterno + "','" + req.body.Apellido_Materno + "'," + req.body.Fecha_Nacimiento + ",'" + req.body.Rfc + ",'" + req.body.Curp + ",'" + req.body.Nombre_Completo + ",'" + req.body.Sexo + ",'" + req.body.Status + ",'" + id[0]['MAX(Id_Persona)'] + ",'" + req.body.Idp + ",'" + req.body.Fecha_Alta + "')"), function (err) {
        res.sendStatus(500)
    }
    let id3 = await sequelize.query("SELECT MAX(do_id) FROM ds03_domicilios", { type: QueryTypes.SELECT });
    id3[0]['MAX(do_id)']++;
    await sequelize.query("INSERT INTO ds03_domicilios (do_id, do_persona, do_No_Interior, do_No_Exterior, do_Tipo_Vialidad, do_Vialidad, do_Codigo_Postal, do_Calle1, do_Calle2, do_Regimen_Hab, do_Regimen, do_Tipo_Asentamiento, do_Asentamiento, do_Unidad_Territorial,do_completo) VALUES (" + id3[0]['MAX(do_id)'] + ",'" + id[0]['MAX(Id_Persona)'] + "','" + req.body.do_No_Interior + "','" + req.body.do_No_Exterior + "'," + req.body.Codigo_Postal + ",'" + req.body.do_Calle1 + ",'" + req.body.do_Calle2 + ",'" + req.body.Regimen_Hab + ",'" + req.body.Regimen + ",'" + req.body.tipo_Asentamiento + ",'" + req.body.Asentamiento + ",'" + req.body.UT + ",'" + req.body.Domicilio_Principal + "')"), function (err) {
        res.sendStatus(500)
    }

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
    await sequelize.query(`DELETE FROM ds02_personas WHERE Id_Persona = ${req.params.userId} `, {
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