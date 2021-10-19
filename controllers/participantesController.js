const participantes = [
  { nombre: "joaquin guzman", dni: "31036564" },
  { nombre: "bruno alancay", dni: "1265855" },
];
exports.participantesHome = (req, res) => {
  res.json(participantes);
};
