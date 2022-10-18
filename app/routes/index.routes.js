const equipoController = require("../controllers/equipo.controller")
module.exports = app => {
  app.get("/api", (req, res) => {
    res.status(200).send({
      data: "Welcome Node Sequlize API v1",
    })
  })
  app.get("/api/equipos", equipoController.getAllEquipos)
  app.post("/api/equipos", equipoController.createEquipo)
  app.put("/api/equipos/:userId", equipoController.updateEquipo)
  app.get("/api/equipos/:userId", equipoController.deleteEquipo)
  app.delete("/api/equipos/:userId", equipoController.getEquipo)
}