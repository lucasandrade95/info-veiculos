const VeiculoService = require('../services/veiculo.service');

exports.get = (req, res) => res.status(200).send(VeiculoService.getAll());
exports.post = (req, res) => res.status(201).send(VeiculoService.create(req.body));
exports.put = (req, res) => {
  const updated = VeiculoService.update(req.params.id, req.body);
  updated ? res.status(200).send(updated) : res.status(404).send({ message: 'Not Found' });
};
exports.delete = (req, res) => {
  VeiculoService.delete(req.params.id);
  res.status(204).send();
};
