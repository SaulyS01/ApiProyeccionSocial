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
            const data = await Equipo.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (data) {
                const updatedEquipo = await data.update({
                    equipo: req.body.equipo,
                    estado: req.body.estado,
                })
                res.status(201).send({
                    'estado': true,
                    'msg': "Equipo actualizado!",
                    'equipo': updatedEquipo
                })
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
            const equipo = await Equipo.destroy({
                where: { id: req.params.id }
            })
            res.status(201).send({
                'estado': true,
                'msg': "Equipo eliminado!",
                'equipo': equipo
            })
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async getEquipo(req, res) {
        try {
            const data = await Equipo.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (data) {
                res.status(201).send({
                    'estado': true,
                    'msg': "Equipo seleccionado!",
                    'equipo': data
                })
            }
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    }
}