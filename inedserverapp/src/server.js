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

    const adults = await sequelize.query("SELECT * FROM ds02_personas WHERE Status=4 ORDER BY Nombre ", { type: QueryTypes.SELECT });

    res.send(adults)
})
app.get('/API/AllAdultsAdmin', async (req, res) => {

    const adults = await sequelize.query("SELECT * FROM ds02_personas WHERE Status IN (4,7) ORDER BY Nombre ", { type: QueryTypes.SELECT });

    res.send(adults)
})

app.get('/API/AllRequestsMonitor', async (req, res) => {

    const adults = await sequelize.query("SELECT * FROM ds02_personas WHERE Status= 5 ORDER BY Nombre", { type: QueryTypes.SELECT });

    res.send(adults)
})
app.get('/API/AllRequestsAdmin', async (req, res) => {

    const adults = await sequelize.query("SELECT * FROM ds02_personas WHERE Status=6 ORDER BY Nombre ", { type: QueryTypes.SELECT });

    res.send(adults)
})

app.get('/API/AllUsers', async (req, res) => {

    const users = await sequelize.query("SELECT b01_us_id,b01_us_Nombre, b01_us_Apellido, b01_us_clave, b01_us_password, b01_us_role FROM ds01_usuarios ORDER BY b01_us_Nombre", { type: QueryTypes.SELECT });

    res.send(users)
})

app.get('/API/AllPhones', async (req, res) => {

    const adults = await sequelize.query(`SELECT te_id, te_msglargo FROM cat_tipotel`, { type: QueryTypes.SELECT });

    res.send(adults)
})
app.get('/API/AllRegimen', async (req, res) => {

    const adults = await sequelize.query(`SELECT re_id, re_msglargo FROM cat_regimen`, { type: QueryTypes.SELECT });

    res.send(adults)
})
app.get('/API/AllAse', async (req, res) => {

    const adults = await sequelize.query(`SELECT as_id, as_msgcorto FROM cat_asentamiento`, { type: QueryTypes.SELECT });

    res.send(adults)
})
app.get('/API/AllVialidad', async (req, res) => {

    const adults = await sequelize.query(`SELECT vi_id, vi_msglargo FROM cat_tipovialidad`, { type: QueryTypes.SELECT });

    res.send(adults)
})
app.post('/API/SetAdults', async (req, res) => {

    console.log(req.body);
    let id = await sequelize.query("SELECT MAX(Id_Persona) FROM ds02_personas", { type: QueryTypes.SELECT });
    id[0]['MAX(Id_Persona)']++;
    await sequelize.query
        (`INSERT INTO
    ds02_personas (
      Id_Persona,
      Nombre,
      Apellido_Paterno,
      Apellido_Materno,
      Fecha_Nacimiento,
      RFC,
      Curp,
      Nombre_Completo,
      Sexo,
      Status,
      StatusArchivo,
      Edad,
      Tipo_Telefono,
      Telefono,
      Rep_Completo,
      Domicilio_Principal,
      Tipo_Vialidad,
      Unidad_Territorial,
      Codigo_Postal,
      Regimen_Hab,
      Regimen,
      Tipo_Asentamiento,
      Asentamiento,
      Observaciones,
      Fecha_Alta,
      Recibe_Solicitud
    )
  VALUES
    (
      "${id[0]['MAX(Id_Persona)']}",
      '${req.body.Nombre}',
      '${req.body.Apellido_Paterno}',
      '${req.body.Apellido_Materno}',
       '${req.body.Fecha_Alta}',
      '${req.body.Rfc}',
      '${req.body.Curp}',
      '${req.body.Nombre_Completo}',
      ${req.body.Sexo},
      ${req.body.Status1},
      ${req.body.StatusArchivo},
      '${req.body.Edad}',
      ${req.body.Tipo_Telefono},
      '${req.body.Telefono}',
      '${req.body.Rep_Completo}',
      '${req.body.Domicilio_Principal}',
      ${req.body.Tipo_Vialidad},
      '${req.body.UT}',
      '${req.body.Codigo_Postal}',
      ${req.body.Regimen_Hab},
      '${req.body.Regimen}',
      ${req.body.tipo_Asentamiento},
      '${req.body.Asentamiento}',
      '${req.body.Observaciones}',
      '${req.body.Fecha_Alta}',
       '${req.body.Usuario}')`)
        , function (err) {
            res.sendStatus(500)
        }

    let id2 = await sequelize.query("SELECT MAX(per_Id_Persona) FROM ds06_personas", { type: QueryTypes.SELECT });
    id2[0]['MAX(per_Id_Persona)']++;
    let id3 = await sequelize.query("SELECT MAX(do_id) FROM ds03_domicilios", { type: QueryTypes.SELECT });
    id3[0]['MAX(do_id)']++;

    await sequelize.query(`INSERT INTO ds03_domicilios 
    (
        do_id, 
        do_persona, 
        do_No_Interior, 
        do_No_Exterior, 
        do_Tipo_Vialidad, 
        do_Vialidad, 
        do_Codigo_Postal, 
        do_Calle1, 
        do_Calle2, 
        do_Regimen_Hab, 
        do_Regimen, 
        do_Tipo_Asentamiento, 
        do_Asentamiento, 
        do_Unidad_Territorial,
        do_completo,
        do_Tipo_Telefono,
        do_Status
        ) VALUES
    (${id3[0]["MAX(do_id)"]}  
    ,${id[0]["MAX(Id_Persona)"]} 
    ,'${req.body.do_No_Interior}' 
    ,'${req.body.do_No_Exterior}' 
    ,'${req.body.Tipo_Vialidad}'
    ,'${req.body.Vialidad}'
    ,'${req.body.Codigo_Postal}'  
    ,'${req.body.do_Calle1}' 
    ,'${req.body.do_Calle2}' 
    ,'${req.body.Regimen_Hab}' 
    ,'${req.body.Regimen}' 
    ,'${req.body.tipo_Asentamiento}' 
    ,'${req.body.Asentamiento}' 
    ,'${req.body.UT}' 
    ,'${req.body.Domicilio_Principal}'
    ,${req.body.Tipo_Telefono}
    ,${req.body.Status1})`)
        , function (err) {
            res.sendStatus(500)
        }


    await sequelize.query(`INSERT INTO ds06_personas 
    (
        per_Id_Persona, 
        per_Nombre, 
        per_Apellido_Paterno, 
        per_Apellido_Materno, 
        per_Fecha_Nacimiento, 
        per_Edad, 
        per_RFC, 
        per_Curp, 
        per_Nombre_Completo, 
        per_Sexo, 
        per_Status, 
        idds02, 
        Idp, 
        per_Fecha_Alta,
        per_Domprincipal
        ) 
        VALUES 
        (
            ${id2[0]["MAX(per_Id_Persona)"]} 
            ,'${req.body.Nombre}' 
            ,'${req.body.Apellido_Paterno}' 
            ,'${req.body.Apellido_Materno}'
            ,'${req.body.Fecha_Alta}'
            ,'${req.body.Edad}' 
            ,'${req.body.Rfc}' 
            ,'${req.body.Curp}' 
            ,'${req.body.Nombre_Completo}' 
            ,${req.body.Sexo} 
            ,${req.body.Status1} 
            ,${id[0]["MAX(Id_Persona)"]} 
            ,${req.body.Idp} 
            ,'${req.body.Fecha_Alta}' 
            ,${id3[0]["MAX(do_id)"]} )`), function (err) {
            res.sendStatus(500)
        }



    await sequelize.query(`INSERT INTO 
    ds10_complpersonal
    (
        co_persona, 
        co_lugarnac, 
        co_etnica, 
        co_gradoest, 
        co_ocupacion, 
        co_padre, 
        co_madre, 
        co_tutor) 
    VALUES 
    ( 
    ${id[0]["MAX(Id_Persona)"]}
    ,'${req.body.LugarNacimiento}'  
    ,'${req.body.Tipo_de_Etnicidad}'  
    ,'${req.body.Tipo_de_Grado}' 
    ,'${req.body.Ocupacion}' 
    ,'${req.body.Padre}' 
    ,'${req.body.Madre}' 
    ,'${req.body.Rep_Completo}'
    )`)
        , function (err) {
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


app.get('/API/EditAdults/:adultId', async (req, res) => {

    const adults = await sequelize.query(`SELECT 	Id_persona,
    Nombre,
    Apellido_Paterno,
    Apellido_Materno,
    Fecha_Nacimiento,
    RFC,
    Curp,
    Nombre_Completo,
    Sexo,
    Status,
    StatusArchivo,
    Edad,
    Tipo_Telefono,
    Telefono,
    Rep_Completo,
    Domicilio_Principal,
    Tipo_Vialidad,
    Unidad_Territorial,
    Codigo_Postal,
    Regimen_Hab,
    Regimen,
    Tipo_Asentamiento,
    Asentamiento,
    Observaciones,
    Fecha_Alta,
  do_No_Interior,
      do_No_Exterior,
      do_Tipo_Vialidad,
      do_Vialidad,
      do_Codigo_Postal,
      do_Calle1,
      do_Calle2,
      do_Regimen_Hab,
      do_Regimen,
      do_Tipo_Asentamiento,
      do_Asentamiento,
      do_Unidad_Territorial,
      do_completo,
      do_Tipo_Telefono,
      do_Delegacion,
      do_Status,
  Idp,
      per_Domprincipal,
  co_lugarnac,
      co_etnica,
      co_gradoest,
      co_ocupacion,
      co_padre,
      co_madre,
      co_tutor
FROM ds02_personas 
JOIN ds03_domicilios  ON ds02_personas.Id_Persona = ds03_domicilios.do_Persona 
JOIN ds06_personas  ON ds03_domicilios.do_Persona  = ds06_personas.idds02 
JOIN ds10_complpersonal ON ds06_personas.idds02  = ds10_complpersonal.co_persona
WHERE ds02_personas.Id_Persona=  ${req.params.adultId} ORDER BY Nombre `, { type: QueryTypes.SELECT });
    res.send(adults)
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
    await sequelize.query(`DELETE FROM ds10_complpersonal WHERE co_persona = ${req.params.userId} `, {
        replacements: {},
        type: QueryTypes.DELETE
    });
    //let id2 = await sequelize.query(`SELECT per_Id_Persona FROM ds06_personas WHERE idds02 = ${req.params.userId}`, { type: QueryTypes.SELECT });
    await sequelize.query(`DELETE FROM ds06_personas WHERE idds02 = ${req.params.userId} `, {
        replacements: {},
        type: QueryTypes.DELETE
    });
    await sequelize.query(`DELETE FROM ds03_domicilios WHERE do_Persona = ${req.params.userId} `, {
        replacements: {},
        type: QueryTypes.DELETE
    });
    await sequelize.query(`DELETE FROM ds02_personas WHERE Id_Persona = ${req.params.userId} `, {
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

app.post('/API/Search', async (req, res) => {
    const user = await sequelize.query(`SELECT ${req.body.Informacion} FROM ${req.body.Tipo} WHERE ${req.body.Campo} = '${req.body.Datos}'`, {
        replacements: {},
        type: QueryTypes.SELECT
    }
        ,
        function (err) {
            res.sendStatus(404)
        }
    );
    if (req.body.BusquedaF == 'Adulto') {
        const user = await sequelize.query(`SELECT ${req.body.Informacion} FROM ${req.body.Tipo} WHERE ${req.body.Campo} = '${req.body.Datos}' AND Status = '${req.body.BusquedaData}'`, {
            replacements: {},
            type: QueryTypes.SELECT
        }
            ,
            function (err) {
                res.sendStatus(404)
            }
        );
    } else if (req.body.BusquedaF == 'Usuario') {
        const user = await sequelize.query(`SELECT ${req.body.Informacion} FROM ${req.body.Tipo} WHERE ${req.body.Campo} = '${req.body.Datos}'`, {
            replacements: {},
            type: QueryTypes.SELECT
        }
            ,
            function (err) {
                res.sendStatus(404)
            }
        );
    }

    //console.log(user);
    res.send(user);
})

app.post('/API/UpdateAdult', async (req, res) => {

    // console.log(req.body);
    // console.log(await sequelize.query("SELECT MAX(b01_us_id) FROM ds01_usuarios", { type: QueryTypes.SELECT }));
    // let id = await sequelize.query("SELECT MAX(b01_us_id) FROM ds01_usuarios", { type: QueryTypes.SELECT });
    // id[0]['MAX(b01_us_id)']++;
    await sequelize.query(`UPDATE ds02_personas 
    SET Nombre = '${req.body.Nombre}', 
    Apellido_Paterno = '${req.body.Apellido_Paterno}', 
    Apellido_Materno = '${req.body.Apellido_Materno}', 
    Fecha_Nacimiento = '${req.body.Fecha_Alta}', 
    RFC = '${req.body.Rfc}',
    Curp= '${req.body.Curp}',
    Nombre_Completo= '${req.body.Nombre_Completo}',
    Sexo= ${req.body.Sexo},
    Status= ${req.body.Status1},
    StatusArchivo= ${req.body.StatusArchivo},
    Edad= '${req.body.Edad}',
    Tipo_Telefono= ${req.body.Tipo_Telefono},
    Telefono= '${req.body.Telefono}',
    Rep_Completo= '${req.body.Rep_Completo}',
    Domicilio_Principal= '${req.body.Domicilio_Principal}',
    Tipo_Vialidad= ${req.body.Tipo_Vialidad},
    Unidad_Territorial= '${req.body.UT}',
    Codigo_Postal= '${req.body.Codigo_Postal}',
    Regimen_Hab= ${req.body.Regimen_Hab},
    Regimen= '${req.body.Regimen}',
    Tipo_Asentamiento= ${req.body.tipo_Asentamiento},
    Asentamiento= '${req.body.Asentamiento}',
    Observaciones= '${req.body.Observaciones}'
    WHERE Id_Persona= ${req.body.IdPersona}`
    )

    res.sendStatus(200);
}
)


const sequelize = new Sequelize('ineddb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});