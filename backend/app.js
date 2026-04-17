const express = require('express');
const cors = require('cors');
const veiculoRoutes = require('./routes/veiculo.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/veiculos', veiculoRoutes);

module.exports = app;
