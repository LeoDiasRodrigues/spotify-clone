const Playlist = require('../models/Playlist');

class PlaylistController {

    static async create(req, res) {

        try {

            const playlist = await Playlist.create(req.body);

            return res.status(201).json({
                data: playlist
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async getAll(req, res) {

        try {

            const playlists = await Playlist.find();

            return res.status(200).json({
                data: playlists
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async getByCliente(req, res) {

        try {

            const playlists = await Playlist.find({
                clienteId: req.params.clienteId
            });

            return res.status(200).json({
                data: playlists
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async getById(req, res) {

        try {

            const playlist = await Playlist.findById(req.params.id);

            return res.status(200).json({
                data: playlist
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async update(req, res) {

        try {

            const playlist = await Playlist.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            return res.status(200).json({
                data: playlist
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

    static async delete(req, res) {

        try {

            await Playlist.findByIdAndDelete(req.params.id);

            return res.status(200).json({
                message: 'Playlist removida'
            });

        } catch (error) {

            return res.status(500).json({
                error: error.message
            });

        }

    }

}

module.exports = PlaylistController;