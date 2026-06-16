const Comentario = require('../models/Comentario');

class ComentarioController {

    static async create(req, res) {

        try {

            const comentario = await Comentario.create(req.body);

            return res.status(201).json({
                data: comentario
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async getAll(req, res) {

        try {

            const comentarios = await Comentario.find();

            return res.status(200).json({
                data: comentarios
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async getById(req, res) {

        try {

            const comentario = await Comentario.findById(req.params.id);

            return res.status(200).json({
                data: comentario
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async update(req, res) {

        try {

            const comentario = await Comentario.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            return res.status(200).json({
                data: comentario
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async delete(req, res) {

        try {

            await Comentario.findByIdAndDelete(req.params.id);

            return res.status(200).json({
                message: 'Comentário removido'
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

}

module.exports = ComentarioController;