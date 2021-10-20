const express = require("express");
const router = express.Router();

//exportar controlador

const participantesController = require("../controllers/participantesController");
module.exports = function () {
  //ruta para el home
  router.get("/", participantesController.participantesHome);

  //Buscar por DNI
  router.get(
    "/participante/:alumnoDni",
    participantesController.participantesDni
  );

  return router;
};
