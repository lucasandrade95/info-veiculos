const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '../../data/veiculos.json');

class VeiculoService {
  constructor() {
    if (!fs.existsSync(path.dirname(DATA_PATH))) fs.mkdirSync(path.dirname(DATA_PATH));
    if (!fs.existsSync(DATA_PATH)) fs.writeFileSync(DATA_PATH, JSON.stringify([]));
  }

  getAll() {
    return JSON.parse(fs.readFileSync(DATA_PATH));
  }

  create(data) {
    const veiculos = this.getAll();
    const novo = { id: Date.now(), ...data };
    veiculos.push(novo);
    fs.writeFileSync(DATA_PATH, JSON.stringify(veiculos, null, 2));
    return novo;
  }

  update(id, data) {
    const veiculos = this.getAll();
    const index = veiculos.findIndex(v => v.id == id);
    if (index === -1) return null;
    veiculos[index] = { ...veiculos[index], ...data };
    fs.writeFileSync(DATA_PATH, JSON.stringify(veiculos, null, 2));
    return veiculos[index];
  }

  delete(id) {
    const veiculos = this.getAll().filter(v => v.id != id);
    fs.writeFileSync(DATA_PATH, JSON.stringify(veiculos, null, 2));
    return true;
  }
}

module.exports = new VeiculoService();
