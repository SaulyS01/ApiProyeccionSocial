const equipoController = require("../controllers/equipo.controller")
module.exports = app => {
  app.get("/api", (req, res) => {
    res.status(200).send({
      data: "Welcome Node Sequlize API v1",
    })
  })
  app.get("/api/equipos", equipoController.getAllEquipos)
  app.post("/api/equipos", equipoController.createEquipo)
  app.put("/api/equipos/:id", equipoController.updateEquipo)
  app.get("/api/equipos/:id", equipoController.getEquipo)
  app.delete("/api/equipos/:id", equipoController.deleteEquipo)
}