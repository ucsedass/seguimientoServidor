var config = {
  user: "sa",
  password: "sql2008",
  server: "dassdc-prin",
  database: "DBPsicoTest",
};
exports.participantesHome = (req, res) => {
  var sql = require("mssql");

  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query(`select * from participantes`, function (err, recordset) {
      if (err) console.log(err);
      res.json(recordset);
      sql.close();
    });
  });
};

exports.participantesDni = (req, res) => {
  var sql = require("mssql");
  let alumnoDni = req.params.alumnoDni;
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query(
      `select * from participantes where participantes.dni = ${alumnoDni}`,
      function (err, recordset) {
        if (err) console.log(err);
        res.json(recordset);
        sql.close();
      }
    );
  });
};
