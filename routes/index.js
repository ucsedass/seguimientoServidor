const express = require("express");
const router = express.Router();

//exportar controlador

const participantesController = require("../controllers/participantesController");
module.exports = function () {
  //rura para el home
  router.get("/", participantesController.participantesHome);

  router.get("/nosotros", (req, res) => {
    res.send("hola nosotros");
  });

  return router;
};
