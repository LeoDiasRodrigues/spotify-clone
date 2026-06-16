import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {

    const [musicas, setMusicas] = useState<any[]>([]);
    const [genero, setGenero] = useState("");

    useEffect(() => {

        axios
            .get("http://localhost:3000/musica")
            .then((res) => {

                setMusicas(res.data.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);

    const musicasFiltradas = genero
        ? musicas.filter(
            (m) => m.genero === genero
        )
        : musicas;

    return (

        <div className="home">

            <h1>Spotify Clone</h1>

            <Link to="/biblioteca">

                <button className="btn-spotify">
                    Sua Biblioteca
                </button>

            </Link>

            <br />
            <br />

            <select
                className="filtro"
                value={genero}
                onChange={(e) =>
                    setGenero(e.target.value)
                }
            >

                <option value="">
                    Todos os gêneros
                </option>

                <option value="Rock">
                    Rock
                </option>

                <option value="Pop">
                    Pop
                </option>

            </select>

            <div className="lista-musicas">

                {musicasFiltradas.map((musica) => (

                    <div
                        key={musica._id}
                        className="card-musica"
                    >

                        <h2>
                            {musica.titulo}
                        </h2>

                        <p>
                            {musica.artista}
                        </p>

                        <p>
                            Gênero: {musica.genero}
                        </p>

                        <p>
                            Duração: {musica.duracao}
                        </p>

                        <Link
                            to={`/musica/${musica._id}`}
                        >

                            <button
                                className="btn-spotify"
                            >
                                Ver Música
                            </button>

                        </Link>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Home;