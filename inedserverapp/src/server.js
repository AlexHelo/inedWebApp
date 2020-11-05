const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize, QueryTypes } = require('sequelize');

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

app.post('/API/SetAdults', async (req, res) => {

    console.log(req.body);
    res.sendStatus(200);
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