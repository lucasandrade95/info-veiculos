const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;
const DATA_FILE = './veiculos.json';

app.use(cors());
app.use(express.json());

const readData = () => {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE));
};

const writeData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

app.get('/veiculos', (req, res) => res.json(readData()));

app.post('/veiculos', (req, res) => {
  const data = readData();
  const novo = { id: Date.now(), ...req.body };
  data.push(novo);
  writeData(data);
  res.status(201).json(novo);
});

app.put('/veiculos/:id', (req, res) => {
  const data = readData();
  const index = data.findIndex(v => v.id == req.params.id);
  if (index === -1) return res.status(404).send();
  data[index] = { ...data[index], ...req.body };
  writeData(data);
  res.json(data[index]);
});

app.delete('/veiculos/:id', (req, res) => {
  let data = readData();
  data = data.filter(v => v.id != req.params.id);
  writeData(data);
  res.status(204).send();
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
