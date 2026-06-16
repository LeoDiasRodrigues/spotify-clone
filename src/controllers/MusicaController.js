const Musica = require('../models/Musica');

class MusicaController {

    static async create(req, res) {

        try {

            const {
                titulo,
                artista,
                genero,
                duracao,
                ano,
                letra,
                capa
            } = req.body;

            const musica = await Musica.create({
                titulo,
                artista,
                genero,
                duracao,
                ano,
                letra,
                capa
            });

            return res.status(201).json({
                message: 'Música criada',
                data: musica
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async getAll(req, res) {

        try {

            const musicas = await Musica.find();

            return res.status(200).json({
                data: musicas
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async getById(req, res) {

        try {

            const musica = await Musica.findById(req.params.id);

            return res.status(200).json({
                data: musica
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async update(req, res) {

        try {

            const musica = await Musica.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            return res.status(200).json({
                data: musica
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async delete(req, res) {

        try {

            await Musica.findByIdAndDelete(req.params.id);

            return res.status(200).json({
                message: 'Música removida'
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

}

module.exports = MusicaController;