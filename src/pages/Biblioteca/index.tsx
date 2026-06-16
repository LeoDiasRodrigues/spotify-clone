import axios from "axios";
import { useEffect, useState } from "react";

function Biblioteca() {

    const [musicas, setMusicas] = useState<any[]>([]);

    useEffect(() => {

        const userId = localStorage.getItem("userId");

        axios
            .get(`http://localhost:3000/playlist/cliente/${userId}`)
            .then(async (res) => {

                const playlists = res.data.data;

                const musicasCompletas = await Promise.all(

                    playlists.map(async (item:any) => {

                        const musica = await axios.get(
                            `http://localhost:3000/musica/${item.musicaId}`
                        );

                        return musica.data.data;

                    })

                );

                setMusicas(musicasCompletas);

            });

    }, []);

    return (

        <div className="home">

            <h1>Sua Biblioteca</h1>

            <div className="lista-musicas">

                {musicas.map((musica) => (

                    <div
                        key={musica._id}
                        className="card-musica"
                    >

                        <h2>{musica.titulo}</h2>

                        <p>{musica.artista}</p>

                        <p>{musica.genero}</p>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Biblioteca;