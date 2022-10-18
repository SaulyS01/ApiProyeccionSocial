const Equipo = require("../models").equipos
module.exports = {
    async getAllEquipos(req, res) {
        try {
            const data = await Equipo.findAll()
            res.status(201).send({
                'estado': true,
                'equipos': data
            })
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async createEquipo(req, res) {
        try {
            const data = await Equipo.create({
                equipo: req.body.equipo,
                estado: req.body.estado
            })
            res.status(201).send(data)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
    async updateEquipo(req, res) {
        try {
            const data = await Equipo.find({
                id: req.params.id,
            })
            if (data) {
                const updatedEquipo = await Equipo.update({
                    equipo: req.body.equipo,
                    estado: req.body.estado,
                })
                res.status(201).send(updatedEquipo)
            } else {
                res.status(404).send("Equipo no encontrado!")
            }
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async deleteEquipo(req, res) {
        try {
            const data = await Equipo.find({
                id: req.params.id,
            })
            if (data) {
                const updatedEquipo = await Tutorial.destroy({
                    where: { id: id }
                })
                res.status(201).send(updatedEquipo)
            }
        } catch (error) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async getEquipo(req, res) {
        try {
            const data = await Equipo.find({
                id: req.params.id,
            })
            if (data) {
                res.status(201).send(data)
            }
        } catch (error) {
            console.log(e)
            res.status(500).send(e)
        }
    }
}