const Cliente = require('../models/Cliente');

class ClienteController {

    static async create(req, res) {
        try {
            const cliente = await Cliente.create(req.body);

            return res.status(201).json({
                message: 'Cliente criado',
                data: cliente
            });

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async getAll(req, res) {
        try {
            const clientes = await Cliente.find();

            return res.status(200).json({
                data: clientes
            });

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async getById(req, res) {
        try {
            const cliente = await Cliente.findById(req.params.id);

            return res.status(200).json({
                data: cliente
            });

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async update(req, res) {
        try {
            const cliente = await Cliente.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            return res.status(200).json({
                data: cliente
            });

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async delete(req, res) {
        try {
            await Cliente.findByIdAndDelete(req.params.id);

            return res.status(200).json({
                message: 'Cliente removido'
            });

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

}

module.exports = ClienteController;